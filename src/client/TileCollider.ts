import { Entity } from './Entity';
import { IGameContext } from './IGameContext';
import { IBackground, Level } from './levels';
import { Matrix } from './math';
import { TileResolver } from './TileResolver';
import * as handlers from './tiles';


export class TileCollider<T extends IBackground> {
    resolvers = [] as Array<TileResolver<T>>;

    addGrid(matrix: Matrix<T>) {
        this.resolvers.push(new TileResolver(matrix));
    }

    checkX(entity: Entity, gameContext: IGameContext, level: Level) {
        let x;
        if (entity.vel.x > 0) {
            x = entity.bounds.right;
        } else if (entity.vel.x < 0) {
            x = entity.bounds.left;
        } else {
            return;
        }

        for (const resolver of this.resolvers) {
            const matches = resolver.searchByRange(
                x, x,
                entity.bounds.top, entity.bounds.bottom
            );

            matches.forEach(match => {
                const handler = handlers[match?.tile?.type];
                if (!handler) {
                    return;
                }
                handler[0]({ entity, match, resolver, gameContext, level });
            });
        }
    }

    checkY(entity: Entity, gameContext: IGameContext, level: Level) {
        let y;
        if (entity.vel.y > 0) {
            y = entity.bounds.bottom;
        } else if (entity.vel.y < 0) {
            y = entity.bounds.top;
        } else {
            return;
        }

        for (const resolver of this.resolvers) {
            const matches = resolver.searchByRange(
                entity.bounds.left, entity.bounds.right,
                y, y
            );

            matches.forEach(match => {
                const handler = handlers[match?.tile?.type];
                if (!handler) {
                    return;
                }
                handler[1]({ entity, match, resolver, gameContext, level });
            });
        }
    }
}
