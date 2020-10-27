import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Trait } from './Trait';


export class Velocity extends Trait {

    constructor() {
        super('velocity');
    }

    update(entity: Entity, gameContext: IGameContext, level: Level) {
        const deltaTime = gameContext.deltaTime;
        entity.pos.x += entity.vel.x * deltaTime;
        entity.pos.y += entity.vel.y * deltaTime; 
    }
}
