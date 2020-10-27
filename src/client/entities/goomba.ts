import { Entity } from '../Entity';
import { GoTrait, Jump, Trait, PendulumMove, Stomper, Killable, Solid, Physics } from '../traits';
import { loadSpriteSheet } from '../loaders';
import { SpriteSheet } from '../SpriteSheet';


class Behavior extends Trait {
    constructor() {
        super('behavior');
    }
    collides(us: Entity, them: Entity) {
        if (us.trait(Killable).dead) {
            return;
        }
        if (them.trait(Stomper)) {
            if (them.vel.y > us.vel.y) {
                us.trait(Killable).kill();
                us.trait(PendulumMove).speed = 0;
            } else {
                them.trait(Killable).kill();
            }
        }
    }
}

export async function loadGoomba(audioContext: AudioContext) {
    const sprite = await loadSpriteSheet('goomba');
    return createGoombaFactory(sprite);
}

function createGoombaFactory(sprite: SpriteSheet) {
    const walkAnim = sprite.animations.get('walk');

    function routeAnim(goomba: Entity) {
        if (goomba.trait(Killable).dead) {
            return 'flat';
        }
        return walkAnim(goomba.lifetime);
    }

    function drawGoomba(context: CanvasRenderingContext2D) {
        sprite.draw(routeAnim(this), context, 0, 0);
    }

    return function createGoomba() {
        const goomba = new Entity('goomba');
        goomba.size.set(16, 16);
        goomba.vel.x = -30;

        goomba.addTrait(new Physics());
        goomba.addTrait(new Solid());
        goomba.addTrait(new PendulumMove());
        goomba.addTrait(new Behavior());
        goomba.addTrait(new Killable());

        goomba.draw = drawGoomba;

        return goomba;
    };
}
