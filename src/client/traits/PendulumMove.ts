import { Entity } from '../Entity';
import { Trait } from './Trait';


export class PendulumMove extends Trait {
    speed = -30;
    enabled = true;

    constructor() {
        super('pendulumMove');
    }

    update(entity: Entity) {
        if (this.enabled) {
            entity.vel.x = this.speed;
        }
    }

    obstruct(entity: Entity, side: 'bottom' | 'top' | 'left' | 'right') {
        if (side === 'left' || side === 'right') {
            this.speed = -this.speed;
        }
    }
}
