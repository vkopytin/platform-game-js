import { Entity } from '../Entity';
import { GoTrait, Jump, Trait, Stomper, Killable, Solid, Physics } from '../traits';
import { loadSpriteSheet } from '../loaders';
import { SpriteSheet } from '../SpriteSheet';
import { PendulumMove } from '../traits';
import { IGameContext } from '../IGameContext';


const STATE_WALKING = 'waliking';
const STATE_HIDDING = 'hidding';
const STATE_PANIC = 'panic';

class Behavior extends Trait {
    state = STATE_WALKING;
    hideTime = 0;
    hideDuration = 5;
    panicSpeed = 300;
    walkSpeed = null;

    constructor() {
        super('behavior');
    }
    collides(us: Entity, them: Entity) {
        if (us.trait(Killable).dead) {
            return;
        }
        if (them.trait(Stomper)) {
            if (them.vel.y > us.vel.y) {
                this.handleStomp(us, them);
            } else {
                this.handleNudge(us, them);
            }
        }
    }

    handleNudge(us: Entity, them: Entity) {
        if (this.state === STATE_WALKING) {
            them.trait(Killable).kill();
        } else if (this.state === STATE_HIDDING) {
            this.panic(us, them);
        } else if (this.state === STATE_PANIC) {
            const travelDir = Math.sign(us.vel.x);
            const impactDir = Math.sign(us.pos.x - them.pos.x);
            if (travelDir !== 0 && travelDir !== impactDir) {
                them.trait(Killable).kill();
            }
        }
    }

    handleStomp(us: Entity, them: Entity) {
        if (this.state === STATE_WALKING) {
            this.hide(us);
        } else if (this.state === STATE_HIDDING) {
            us.trait(Killable).kill();
            us.vel.set(100, -200);
            us.trait(Solid).obstructs = false;
        } else if (this.state === STATE_PANIC) {
            this.hide(us);
        }
    }

    panic(us: Entity, them: Entity) {
        us.trait(PendulumMove).enabled = true;
        us.trait(PendulumMove).speed = this.panicSpeed * Math.sign(them.vel.x);
        this.state = STATE_PANIC;
    }

    hide(us: Entity) {
        us.vel.x = 0;
        us.trait(PendulumMove).enabled = false;
        if (this.walkSpeed === null) {
            this.walkSpeed = us.trait(PendulumMove).speed;
        }
        this.hideTime = 0;
        this.state = STATE_HIDDING;
    }

    unhide(us: Entity) {
        us.trait(PendulumMove).enabled = true;
        us.trait(PendulumMove).speed = this.walkSpeed;
        this.state = STATE_WALKING;
    }

    update(entity: Entity, gameContext: IGameContext) {
        const { deltaTime } = gameContext;
        if (this.state === STATE_HIDDING) {
            this.hideTime += deltaTime;
            if (this.hideTime > this.hideDuration) {
                this.unhide(entity);
            }
        }
    }
}

export async function loadKoopa(audioContext: AudioContext) {
    const sprite = await loadSpriteSheet('koopa');
    return createKoopaFactory(sprite);
}

function createKoopaFactory(sprite: SpriteSheet) {
    const walkAnim = sprite.animations.get('walk');
    const wakeAnim = sprite.animations.get('wake');
    
    function routeAnim(koopa: Entity) {
        if (koopa.trait(Behavior).state === STATE_HIDDING) {
            if (koopa.trait(Behavior).hideTime > 3) {
                return wakeAnim(koopa.trait(Behavior).hideTime);
            }
            return 'hiding';
        } else if (koopa.trait(Behavior).state === STATE_PANIC) {
            return 'hiding';
        }

        return walkAnim(koopa.lifetime);
    }

    function drawKoopa(context: CanvasRenderingContext2D) {
        sprite.draw(routeAnim(this), context, 0, 0, this.vel.x < 0);
    }

    return function createKoopa() {
        const koopa = new Entity('koopa');
        koopa.size.set(16, 16);
        koopa.offset.y = 8;

        koopa.addTrait(new Physics());
        koopa.addTrait(new Solid());
        koopa.addTrait(new PendulumMove());
        koopa.addTrait(new Killable());
        koopa.addTrait(new Behavior());

        koopa.draw = drawKoopa;

        return koopa;
    };
}
