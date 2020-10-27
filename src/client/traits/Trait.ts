import { AudioBoard } from '../AudioBoard';
import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { EventBuffer } from '../EventBuffer';


export class Trait {
    listeners = [] as Array<{ name: string, callback: (...args) => any, count: number }>;

    constructor(public NAME: string) {

    }

    listen(name: string, callback: (...args) => any, count = Infinity) {
        this.listeners.push({ name, callback, count });
    }

    finalize(entity: Entity) {
        this.listeners = this.listeners.filter(listener => {
            entity.events.process(listener.name, listener.callback);
            return --listener.count;
        });
    }

    queue(task: (entity: Entity) => any) {
        this.listen('task', task, 1);
    }

    collides(us, them) {

    }

    update(entity: Entity, gameContext: IGameContext, level: Level) {

    }

    obstruct(entity: Entity, side: 'bottom' | 'top' | 'left' | 'right', match) {

    }
}
