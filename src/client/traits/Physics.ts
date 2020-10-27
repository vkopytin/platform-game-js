import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Trait } from './Trait';


export class Physics extends Trait {

    constructor() {
        super('physics');
    }

    update(entity: Entity, gameContext: IGameContext, level: Level) {
        const deltaTime = gameContext.deltaTime;
        entity.pos.x += entity.vel.x * deltaTime;
        level.tileCollider.checkX(entity, gameContext, level);

        entity.pos.y += entity.vel.y * deltaTime;
        level.tileCollider.checkY(entity, gameContext, level);

        entity.vel.y += level.gravity * deltaTime;    
    }
}
