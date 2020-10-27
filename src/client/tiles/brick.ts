import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { TileResolver } from '../TileResolver';
import { Player } from '../traits';


function handleX<T>({ entity, match }: {
    entity: Entity;
    match;
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
    match;
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
            grid.delete(match.indexX, match.indexY);
            const goomba = gameContext.entityFactory.goomba();
            goomba.vel.set(50, -400);
            goomba.pos.set(match.x1, match.y1);
            level.entities.add(goomba);
        }
        if (entity.bounds.top < match.y2) {
            entity.obstruct('top', match);
        }
    }
}

export const brick = [handleX, handleY];
