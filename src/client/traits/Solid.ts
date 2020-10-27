import { Entity } from '../Entity';
import { Trait } from './Trait';


export class Solid extends Trait {
    obstructs = true;

    constructor() {
        super('solid');
    }

    obstruct(entity: Entity, side: 'bottom' | 'top' | 'left' | 'right', match) {
        if (!this.obstructs) {
            return;
        }

        if (side === 'top') {
            entity.bounds.top = match.y2;
            entity.vel.y = 0;
        } else if (side === 'bottom') {
            entity.bounds.top = match.y1 - entity.size.y;
            entity.vel.y = 0;
        } else if (side == 'left') {
            entity.bounds.left = match.x2;
            entity.vel.x = 0;
        } else if (side === 'right') {
            entity.bounds.left = match.x1 - entity.size.x;
            entity.vel.x = 0;
        }
    }
}
