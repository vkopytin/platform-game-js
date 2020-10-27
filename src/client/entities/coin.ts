import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { loadSpriteSheet } from '../loaders';
import { SpriteSheet } from '../SpriteSheet';
import { Gravity, Killable, PendulumMove, Stomper, Trait, Velocity } from '../traits';


class Behavior extends Trait {
    gravity = new Gravity();
    removeAfter = 0.5;
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

export async function loadCoin(audioContext: AudioContext) {
    const sprite = await loadSpriteSheet('coin');
    return createCoinFactory(sprite);
}

function createCoinFactory(sprite: SpriteSheet) {
    const walkAnim = sprite.animations.get('turn');

    function routeAnim(coin: Entity) {
        return walkAnim(coin.lifetime);
    }

    function drawCoin(context: CanvasRenderingContext2D) {
        sprite.draw(routeAnim(this), context, 0, 0, this.vel.x < 0);
    }

    return function createCoin() {
        const coin = new Entity('coin');
        coin.size.set(8, 16);

        coin.addTrait(new Velocity());
        coin.addTrait(new Behavior());
        coin.addTrait(new Gravity());

        coin.draw = drawCoin;

        return coin;
    };
}
