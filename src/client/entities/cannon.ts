import { AudioBoard } from '../AudioBoard';
import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { loadAudioBoard } from '../loaders';
import { findPlayers } from '../player';
import { Emitter, GoTrait, Jump, Killable, Stomper } from '../traits';


const HOLD_FIRE_THRESHOLD = 30;
const KEEP_FIRE_DISTANCE = 16 * 16;

export async function loadCannon(audioContext: AudioContext) {
    const audioBoard = await loadAudioBoard('cannon', audioContext);
    return createCannonFactory(audioBoard);
}

function createCannonFactory(audioBoard: AudioBoard) {

    function emitBullet(cannon: Entity, gameContext: IGameContext, level: Level) {
        let dir = 1;
        for (const player of findPlayers(level)) {
            const distance = Math.abs(player.pos.x - cannon.pos.x);
            if (!(distance >= HOLD_FIRE_THRESHOLD && distance <= KEEP_FIRE_DISTANCE)) {
                return;
            }
            dir = Math.sign(player.pos.x - cannon.pos.x);
        }
        const bullet = gameContext.entityFactory.bullet() as Entity;

        bullet.pos.copy(cannon.pos);
        bullet.vel.set(dir * 80, 0);

        cannon.sounds.add('shoot');
        level.entities.add(bullet);
    }

    return function createCannon() {
        const cannon = new Entity('cannon');
        cannon.audio = audioBoard;

        const emitter = new Emitter();
        emitter.holdFireThreshold = HOLD_FIRE_THRESHOLD;
        emitter.keepFireDistance = KEEP_FIRE_DISTANCE;
        emitter.interval = 4;
        emitter.emitters.push(emitBullet);
        cannon.addTrait(emitter);

        return cannon;
    };
}
