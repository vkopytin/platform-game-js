import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Trait } from './Trait';


export class Killable extends Trait {
    dead = false;
    deadTime = 0;
    removeAfter = 2;

    constructor() {
        super('killable');
    }

    kill() {
        this.queue(() => this.dead = true);
    }
    
    revive() {
        this.dead = false;
        this.deadTime = 0;
    }

    update(entity: Entity, gameContext: IGameContext, level: Level) {
        const deltaTime = gameContext.deltaTime;
        if (this.dead) {
            this.deadTime += deltaTime;

            if (this.deadTime > this.removeAfter) {
                this.queue(() => level.entities.delete(entity));
            }
        }
    }
}
