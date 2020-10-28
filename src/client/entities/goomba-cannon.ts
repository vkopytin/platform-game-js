import { AudioBoard } from '../AudioBoard';
import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { loadAudioBoard } from '../loaders';
import { findPlayers } from '../player';
import { Emitter, GoTrait, Jump, Killable, Stomper } from '../traits';


export async function loadGoombaCannon(audioContext: AudioContext) {
    const audioBoard = await loadAudioBoard('cannon', audioContext);
    return createGoombaCannonFactory(audioBoard);
}

function createGoombaCannonFactory(audioBoard: AudioBoard) {

    const goombas = new Map<Entity, Entity>();
    function emitGoomba(cannon: Entity, gameContext: IGameContext, level: Level) {
        let dir = 0;
        for (const player of findPlayers(level)) {
            dir = Math.sign(player.pos.x - cannon.pos.x);
        }
        if (level.entities.has(goombas.get(cannon))) {
            return;
        }
        const goomba = gameContext.entityFactory.goomba() as Entity;

        goomba.pos.copy(cannon.pos);
        goomba.vel.set(-dir * 30, 0);

        cannon.sounds.add('shoot');
        level.entities.add(goomba);
        goombas.set(cannon, goomba);
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
