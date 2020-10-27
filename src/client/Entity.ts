import { Vec2 } from './math';
import { Trait } from './traits';
import { BoundingBox } from './BoundingBox';
import { Level } from './levels';
import { AudioBoard } from './AudioBoard';
import { IGameContext } from './IGameContext';
import { EventBuffer } from './EventBuffer';


class Entity {
    lifetime = 0;
    //[key: string]: Entity[keyof Entity] | Trait | any;
    pos = new Vec2();
    vel = new Vec2();
    size = new Vec2();
    offset = new Vec2();
    traits = new Map();
    bounds = new BoundingBox(this.pos, this.size, this.offset);
    audio = new AudioBoard();
    sounds = new Set<string>();
    events = new EventBuffer();

    draw = (context: CanvasRenderingContext2D) => { }

    constructor(public name = '') {

    }

    addTrait(trait: Trait) {
        this.traits.set(trait.constructor as any, trait);
    }

    trait<T>(traitCtor: new (...args: any[]) => T): T {
        return this.traits.get(traitCtor);
    }

    collides(candidate: Entity) {
        this.traits.forEach(trait => {
            trait.collides(this, candidate);
        });
    }

    obstruct(side: 'bottom' | 'top' | 'left' | 'right', match: any) {
        this.traits.forEach(trait => {
            trait.obstruct(this, side, match);
        });
    }

    finalize() {
        this.events.emit('task', this);
        this.traits.forEach(trait => trait.finalize(this));
        this.events.clear();
    }

    update(gameContext: IGameContext, level: Level) {
        this.traits.forEach(trait => {
            trait.update(this, gameContext, level);
            this.playSounds(this.audio, gameContext.audioContext);
        });

        this.lifetime += gameContext.deltaTime;
    }

    playSounds(audioBoard: AudioBoard, audioContext: AudioContext) {
        this.sounds.forEach(sound => {
            audioBoard.playAudio(sound, audioContext);
        });
        this.sounds.clear();
    }
}

export { Entity };
