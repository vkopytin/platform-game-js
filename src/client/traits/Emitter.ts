import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Trait } from './Trait';


export class Emitter extends Trait {
    interval = 2;
    coolDown = this.interval;
    emitters = []  as Array<(entity: Entity, gameContext: IGameContext, level: Level) => any>;

    constructor() {
        super('emitter');
    }

    emit(entity: Entity, gameContext: IGameContext, level: Level) {
        for (const emitter of this.emitters) {
            emitter(entity, gameContext, level);
        }
    }

    update(entity: Entity, gameContext: IGameContext, level: Level) {
        this.coolDown -= gameContext.deltaTime;
        if (this.coolDown <= 0) {
            this.emit(entity, gameContext, level);
            this.coolDown = this.interval;
        }
    }
}
