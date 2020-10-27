import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Trait } from './Trait';


const SLOW_DRAG = 1 / 2500;
const TURBO_DRAG = 1 / 8000;

export class GoTrait extends Trait {
    direction = 0;
    acceleration = 400;
    deceleration = 300;
    distance = 0;
    heading = 1;
    dragFactor = SLOW_DRAG;

    constructor() {
        super('go');
    }

    update(entity: Entity, gameContext: IGameContext) {
        const deltaTime = gameContext.deltaTime;
        const absX = Math.abs(entity.vel.x);
        if (this.direction) {
            entity.vel.x += this.acceleration * deltaTime * this.direction;
            this.heading = this.direction;
        } else if (entity.vel.x) {
            const decel = Math.min(absX, this.deceleration * deltaTime);
            entity.vel.x += entity.vel.x > 0 ? -decel : decel;
        } else {
            this.distance = 0;
        }
        const drag = this.dragFactor * entity.vel.x * absX;
        entity.vel.x -= drag;
        this.distance += absX * deltaTime;
    }

    turbo(state: 0 | 1) {
        this.dragFactor = state ? TURBO_DRAG : SLOW_DRAG;
    }
}
