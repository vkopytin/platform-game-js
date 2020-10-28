import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Trait } from './Trait';
import { findPlayers } from '../player';


const HOLD_FIRE_THRESHOLD = 18 * 16;
const KEEP_FIRE_DISTANCE = 22 * 16;

export class Emitter extends Trait {
    interval = 2;
    coolDown = 0;
    holdFireThreshold = 18 * 16;
    keepFireDistance = 22 * 16;
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
        for (const player of findPlayers(level)) {
            const distance = Math.abs(player.pos.x - entity.pos.x);
            if (!(distance >= this.holdFireThreshold && distance <= this.keepFireDistance)) {
                return;
            }
        }
        this.coolDown -= gameContext.deltaTime;
        if (this.coolDown <= 0) {
            this.emit(entity, gameContext, level);
            this.coolDown = this.interval;
        }
    }
}
