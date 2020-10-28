import { Camera } from '../Camera';
import { Compositor } from '../Compositor';
import { Entity } from '../Entity';
import { EntityCollider } from '../EntityCollider';
import { EventEmitter } from '../EventEmitter';
import { IGameContext } from '../IGameContext';
import { Matrix, Vec2 } from '../math';
import { MusicController } from '../MusicController';
import { findPlayers } from '../player';
import { TileCollider } from '../TileCollider';
import { GoTrait, Jump, LevelTimer, Velocity } from '../traits';
import { Player } from '../traits/Player';
import { IBackground } from './ILevel';
import { Scene } from './Scene';


const distance = (from: Vec2, to: Vec2) => Math.sqrt((to.x - from.x) * (to.x - from.x) + (to.y - from.y) * (to.y - from.y));
const distanceX = (from: Vec2, to: Vec2) => Math.sqrt((to.x - from.x) * (to.x - from.x));
const distanceY = (from: Vec2, to: Vec2) => Math.sqrt((to.y - from.y) * (to.y - from.y));
const lerp = (pos: number, target: number, amount: number)  => { return pos + amount * (target - pos); }

function focusPlayer(level: Level) {
    for (const player of findPlayers(level)) {
        const middleX = (level.camera.size.x) * (Math.sign(player.trait(GoTrait).heading) < 0 ? 0.75 : 0.25);
        const middleY = (level.camera.size.y) * 0.65;

        const distX = Math.floor(distanceX(level.camera.pos, new Vec2(player.pos.x - middleX, player.pos.y - middleY)));
        const absDistX = Math.floor(distanceX(new Vec2(0,0), new Vec2(middleX, middleY)));
        const distY = Math.floor(distanceY(level.camera.pos, new Vec2(player.pos.x - middleX, player.pos.y - middleY)));
        const absDistY = Math.floor(distanceY(new Vec2(0, 0), new Vec2(middleX, middleY)));
        
        const dist = distance(level.camera.pos, new Vec2(player.pos.x - middleX, player.pos.y - middleY));
        if (dist > 50) {
            level.camera.pos.x = Math.max(0, lerp(level.camera.pos.x, player.pos.x - middleX, Math.abs((distX) / (absDistX)) * 0.02));
            level.camera.pos.y = Math.max(0, lerp(level.camera.pos.y, player.pos.y - middleY, Math.abs((distY) / (absDistY)) * 0.05));
        }
    }
}

export class Level extends Scene {
    name = '';
    gravity = 1600;
    totalTime = 0;
    entities = new Set<Entity>();
    tileCollider = new TileCollider() as TileCollider<IBackground>;
    entityCollider = new EntityCollider(this.entities);
    music = new MusicController();
    camera = new Camera();

    addCollisionGrid(matrix: Matrix<IBackground>) {
        this.tileCollider.addGrid(matrix);
    }

    draw(gameContext: IGameContext) {
        this.comp.draw(gameContext.videoContext, this.camera);
    }

    update(gameContext: IGameContext) {
        this.entities.forEach(entity => {
            entity.update(gameContext, this);
        });

        this.entities.forEach(entity => {
            this.entityCollider.check(entity);
        });

        this.entities.forEach(entity => entity.finalize());

        focusPlayer(this);

        this.totalTime += gameContext.deltaTime;
    }

    pause() {
        this.music.pause();
    }

    has(entity: Entity) {
        for (const current of this.entities) {
            if (current === entity) {
                return true;
            }
        }
        return false;
    }
}
