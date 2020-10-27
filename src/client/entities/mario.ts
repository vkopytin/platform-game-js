import { Entity } from '../Entity';
import { GoTrait, Jump, Stomper, Killable, Solid, Physics } from '../traits';
import { loadAudioBoard, loadSpriteSheet } from '../loaders';
import { SpriteSheet } from '../SpriteSheet';
import { AudioBoard } from '../AudioBoard';


export async function loadMario(audioContext: AudioContext) {
    const audioBoard = await loadAudioBoard('mario', audioContext);
    const sprite = await loadSpriteSheet('mario');
    return createMarioFactory(sprite, audioBoard);
}

function createMarioFactory(sprite: SpriteSheet, audioBoard: AudioBoard) {

    const runAnim = sprite.animations.get('run');

    function routeFrame(mario: Entity) {
        if (!mario.trait(Jump).ready) {
            return 'jump';
        }
        if (mario.trait(GoTrait).distance > 0) {
            if (
                mario.vel.x > 0 && mario.trait(GoTrait).direction < 0
                || mario.vel.x < 0 && mario.trait(GoTrait).direction > 0
            ) {
                return 'break';
            }
            return runAnim(mario.trait(GoTrait).distance);
        }
        return 'idle';
    }

    function drawMario(this: Entity, context: CanvasRenderingContext2D) {
        sprite.draw(routeFrame(this), context, 0, 0, this.trait(GoTrait).heading < 0);
    }

    return function createMario() {
        const mario = new Entity('Mario');
        mario.audio = audioBoard;
        mario.size.set(14, 16);

        mario.addTrait(new Physics());
        mario.addTrait(new Solid());
        mario.addTrait(new GoTrait());
        mario.addTrait(new Jump());
        mario.addTrait(new Killable());
        mario.addTrait(new Stomper());

        mario.trait(Killable).removeAfter = 0;
        mario.draw = drawMario;

        return mario;
    };
}
