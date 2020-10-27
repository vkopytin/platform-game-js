import { Camera } from '../Camera';
import { Compositor } from '../Compositor';
import { Entity } from '../Entity';
import { EntityCollider } from '../EntityCollider';
import { EventEmitter } from '../EventEmitter';
import { IGameContext } from '../IGameContext';
import { Matrix } from '../math';
import { MusicController } from '../MusicController';
import { findPlayers } from '../player';
import { TileCollider } from '../TileCollider';
import { Jump, LevelTimer, Velocity } from '../traits';
import { Player } from '../traits/Player';
import { IBackground } from './ILevel';
import { Scene } from './Scene';


function focusPlayer(level: Level) {
    for (const player of findPlayers(level)) {
        level.camera.pos.x = Math.max(0, player.pos.x - 100);
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
}
