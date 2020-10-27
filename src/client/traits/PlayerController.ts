import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Vec2 } from '../math';
import { Killable } from './Killable';
import { Trait } from './Trait';


export class PlayerController extends Trait {
    player = null as Entity;
    checkpoint = new Vec2(64, 90);

    constructor() {
        super('playerController');
    }

    setPlayer(entity: Entity) {
        this.player = entity;
    }

    update(entity: Entity, gameContext: IGameContext, level: Level) {
        if (!level.entities.has(this.player)) {
            this.player.pos.set(this.checkpoint.x, this.checkpoint.y);
            this.player.trait(Killable).revive();
            level.entities.add(this.player);
        }
    }
}
