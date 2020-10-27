import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { loadSpriteSheet } from '../loaders';
import { SpriteSheet } from '../SpriteSheet';
import { Gravity, Trait, Velocity } from '../traits';


class Behavior extends Trait {
    gravity = new Gravity();
    removeAfter = 5;
    idleTime = 0;

    constructor() {
        super('behavior');
    }
    update(entity: Entity, gameContext: IGameContext, level: Level) {
        this.idleTime += gameContext.deltaTime;
        if (this.idleTime > this.removeAfter) {
            this.queue(() => level.entities.delete(entity));
        }
    }
}

export async function loadBrick(audioContext: AudioContext) {
    const sprite = await loadSpriteSheet('brick');
    return createBrickFactory(sprite);
}

function createBrickFactory(sprite: SpriteSheet) {
    const walkAnim = sprite.animations.get('turn');

    function routeAnim(coin: Entity) {
        return walkAnim(coin.lifetime);
    }

    function drawBrick(context: CanvasRenderingContext2D) {
        sprite.draw(routeAnim(this), context, 0, 0, this.vel.x < 0);
    }

    return function createBrick() {
        const brick = new Entity('brick');
        brick.size.set(8, 16);

        brick.addTrait(new Velocity());
        brick.addTrait(new Behavior());
        brick.addTrait(new Gravity());

        brick.draw = drawBrick;

        return brick;
    };
}
