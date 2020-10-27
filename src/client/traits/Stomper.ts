import { Entity } from '../Entity';
import { Killable } from './Killable';
import { Trait } from './Trait';


export class Stomper extends Trait {
    bounceSpeed = 400;

    onStomp = (us: Entity, them: Entity) => { };

    constructor() {
        super('stomper');
    }

    bounce(us: Entity, them: Entity) {
        us.bounds.bottom = them.bounds.top;
        us.vel.y = -this.bounceSpeed;
    }

    collides(us: Entity, them: Entity) {
        if (!them.trait(Killable) || them.trait(Killable).dead) {
            return;
        }
        if (us.vel.y > them.vel.y) {
            this.queue(() => {
                this.bounce(us, them);
                us.sounds.add('marioStomp');
                us.events.emit('stomp', us, them);
            });
        }
    }
}
