import { AudioBoard } from '../AudioBoard';
import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { loadAudioBoard } from '../loaders';
import { findPlayers } from '../player';
import { Emitter, GoTrait, Jump, Killable, Stomper } from '../traits';


const HOLD_FIRE_THRESHOLD = 14 * 16;
const KEEP_FIRE_DISTANCE = 20 * 16;

export async function loadGoombaCannon(audioContext: AudioContext) {
    const audioBoard = await loadAudioBoard('cannon', audioContext);
    return createGoombaCannonFactory(audioBoard);
}

function createGoombaCannonFactory(audioBoard: AudioBoard) {

    function emitGoomba(cannon: Entity, gameContext: IGameContext, level: Level) {
        let dir = 0;
        for (const player of findPlayers(level)) {
            const distance = Math.abs(player.pos.x - cannon.pos.x);
            if (!(distance >= HOLD_FIRE_THRESHOLD && distance <= KEEP_FIRE_DISTANCE)) {
                return;
            }
            dir = Math.sign(player.pos.x - cannon.pos.x);
        }
        const bullet = gameContext.entityFactory.goomba() as Entity;

        bullet.pos.copy(cannon.pos);
        bullet.vel.set(-dir * 30, 0);

        cannon.sounds.add('shoot');
        level.entities.add(bullet);
    }

    return function createGoombaCannon() {
        const cannon = new Entity('goomba-cannon');
        cannon.audio = audioBoard;

        const emitter = new Emitter();
        emitter.interval = 4;
        emitter.emitters.push(emitGoomba);
        cannon.addTrait(emitter);

        return cannon;
    };
}