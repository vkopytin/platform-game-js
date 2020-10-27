import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { loadSpriteSheet } from '../loaders';
import { SpriteSheet } from '../SpriteSheet';
import { Gravity, Killable, PendulumMove, Stomper, Trait, Velocity } from '../traits';


class Behavior extends Trait {
    gravity = new Gravity();
    maxDistance = 200 * 16;
    currentDistance = 0;

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
                us.vel.set(100, -200);
            } else {
                them.trait(Killable).kill();
            }
        }
    }
    update(entity: Entity, gameContext: IGameContext, level) {
        const absX = Math.abs(entity.vel.x);
        if (this.currentDistance > this.maxDistance) {
            entity.trait(Killable).kill();
        }
        if (entity.trait(Killable).dead) {
            this.gravity.update(entity, gameContext, level);
        }
        this.currentDistance += absX * gameContext.deltaTime;
    }
}

export async function loadBullet(audioContext: AudioContext) {
    const sprite = await loadSpriteSheet('bullet');
    return createBulletFactory(sprite);
}

function createBulletFactory(sprite: SpriteSheet) {
    const walkAnim = sprite.animations.get('walk');

    function routeAnim(bullet: Entity) {
        if (bullet.trait(Killable).dead) {
            return 'flat';
        }
        return walkAnim(bullet.lifetime);
    }

    function drawBullet(context: CanvasRenderingContext2D) {
        sprite.draw(routeAnim(this), context, 0, 0, this.vel.x < 0);
    }

    return function createBullet() {
        const bullet = new Entity('bullet');
        bullet.size.set(16, 14);

        bullet.addTrait(new Velocity());
        bullet.addTrait(new Behavior());
        bullet.addTrait(new Killable());

        bullet.draw = drawBullet;

        return bullet;
    };
}
