import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { TileResolver } from '../TileResolver';
import { Player } from '../traits';


export function handle<T>({ entity, match, resolver, gameContext, level }: {
    entity: Entity;
    match: any;
    resolver: TileResolver<T>;
    gameContext: IGameContext;
    level: Level;
}) {
    if (entity.trait(Player)) {
        entity.trait(Player).addCoins(1);
        const grid = resolver.matrix;
        grid.delete(match.indexX, match.indexY);
        const coin = gameContext.entityFactory.coin();
        coin.vel.set(50, -400);
        coin.pos.set(match.x1, match.y1);
        level.entities.add(coin);
    }
}


export const coin = [handle, handle];
