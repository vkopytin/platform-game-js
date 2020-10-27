import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { TileResolver } from '../TileResolver';
import { Player } from '../traits';


function handleX<T>({ entity, match }: {
    entity: Entity;
    match: any;
    resolver: TileResolver<T>;
    gameContext: IGameContext;
    level: Level;
}) {
    if (entity.vel.x > 0) {
        if (entity.bounds.right > match.x1) {
            entity.obstruct('right', match);
        }
    } else if (entity.vel.x < 0) {
        if (entity.bounds.left < match.x2) {
            entity.obstruct('left', match);
        }
    }
}

function handleY<T>({ entity, match, resolver, gameContext, level }: {
    entity: Entity;
    match: any;
    resolver: TileResolver<T>;
    gameContext: IGameContext;
    level: Level;
}) {
    if (entity.vel.y > 0) {
        if (entity.bounds.bottom > match.y1) {
            entity.obstruct('bottom', match);
        }
    } else if (entity.vel.y < 0) {
        if (entity.trait(Player)) {
            const grid = resolver.matrix;
            grid.replace(match.indexX, match.indexY, {
                ...grid.get(match.indexX, match.indexY),
                name: 'chance-ground',
                type: 'ground'
            });
            entity.trait(Player).addCoins(1);
            const coin = gameContext.entityFactory.coin();
            coin.vel.set(50, -400);
            coin.pos.set(match.x1, match.y1);
            level.entities.add(coin);
            entity.trait(Player).queue(entity => entity.sounds.add('marioCoin'));
        }
        if (entity.bounds.top < match.y2) {
            entity.obstruct('top', match);
        }
    }
}

export const chance = [handleX, handleY];
