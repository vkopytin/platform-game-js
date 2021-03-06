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
            grid.delete(match.indexX, match.indexY);

            entity.trait(Player).queue(entity => entity.sounds.add('marioBreakBlock'));

            const brick1 = gameContext.entityFactory.brick();
            brick1.vel.set(50, -400);
            brick1.pos.set(match.x1, match.y1);
            level.entities.add(brick1);

            const brick2 = gameContext.entityFactory.brick();
            brick2.vel.set(100, -500);
            brick2.pos.set(match.x1, match.y1);
            level.entities.add(brick2);

            const brick3 = gameContext.entityFactory.brick();
            brick3.vel.set(-50, -400);
            brick3.pos.set(match.x1, match.y1);
            level.entities.add(brick3);

            const brick4 = gameContext.entityFactory.brick();
            brick4.vel.set(-100, -500);
            brick4.pos.set(match.x1, match.y1);
            level.entities.add(brick4);
        }
        if (entity.bounds.top < match.y2) {
            entity.obstruct('top', match);
        }
    }
}

export const brick = [handleX, handleY];
