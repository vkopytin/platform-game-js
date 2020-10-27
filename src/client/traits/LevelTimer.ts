import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Trait } from './Trait';


export class LevelTimer extends Trait {
    totalTime = 300;
    currentTime = this.totalTime;
    hurryTime = 100;
    hurryEmitted = null;

    constructor() {
        super('levelTimer');
    }

    update(entity: Entity, gameContext: IGameContext, level: Level) {
        const deltaTime = gameContext.deltaTime;
        this.currentTime -= deltaTime;
        if (this.hurryEmitted !== true && this.currentTime < this.hurryTime) {
            level.events.emit('timerHurry');
            this.hurryEmitted = true;
        }
        if (this.hurryEmitted !== false && this.currentTime > this.hurryTime) {
            level.events.emit('timerOk');
            this.hurryEmitted = false;
        }
    }
}
