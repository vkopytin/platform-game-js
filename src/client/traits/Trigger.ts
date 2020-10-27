import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Trait } from './Trait';


export class Trigger extends Trait {
    touches = new Set<Entity>();
    conditions = [] as Array<(entity: Entity, touches: Set<Entity>, gameContext: IGameContext, level: Level) => any>;

    constructor() {
        super('trigger');
    }

    collides(us, them) {
        this.touches.add(them);
    }

    update(entity: Entity, gameContext: IGameContext, level: Level) {
        if (this.touches.size > 0) {
            for (const condition of this.conditions) {
                condition(entity, this.touches, gameContext, level);
            }
            this.touches.clear();
        }
    }
}
