import { AudioBoard } from '../AudioBoard';
import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Trait } from './Trait';


export class Jump extends Trait {
    duration = 0.3;
    velocity = 200;
    engageTime = 0;
    ready = false;
    doubleJump = 0;
    gracePeriod = 0.1;
    requestTime = 0;
    speedBoost = 0.3;

    constructor() {
        super('jump');
    }

    start() {
        this.requestTime = this.gracePeriod;
    }

    cancel() {
        this.engageTime = 0;
        this.requestTime = 0;
    }

    update(entity: Entity, gameContext: IGameContext, level: Level) {
        const { deltaTime, audioContext } = gameContext;
        if (this.requestTime > 0) {
            if (this.ready || this.doubleJump < 1) {
                entity.sounds.add('marioJump');
                this.engageTime = this.duration;
                this.doubleJump++;
                this.requestTime = 0;
            }
            if (this.ready) {
                this.doubleJump = 0;
            }
            this.requestTime -= deltaTime;
        }
        if (this.engageTime > 0) {
            // minus (-) - we aretraveling upwards
            entity.vel.y = -(this.velocity + Math.abs(entity.vel.x) * this.speedBoost);
            this.engageTime -= deltaTime;
        }

        this.ready = false;
    }

    obstruct(entity: Entity, side: 'bottom' | 'top') {
        if (side === 'bottom') {
            this.queue(() => this.ready = true);
        } else if (side === 'top') {
            this.cancel();
        }
    }
}
