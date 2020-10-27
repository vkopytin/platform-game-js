import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Trait } from './Trait';


export class Gravity extends Trait {

    constructor() {
        super('gravity');
    }

    update(entity: Entity, gameContext: IGameContext, level: Level) {
        const deltaTime = gameContext.deltaTime;
        entity.vel.y += level.gravity * deltaTime;    
    }
}
