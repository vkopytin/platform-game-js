import { Camera } from '../Camera';
import { Entity } from '../Entity';
import { Level } from '../levels';
import { Font } from '../loaders';
import { findPlayers } from '../player';
import { LevelTimer } from '../traits';


function getPlayerEntity(level: Level) {
    for (const entity of findPlayers(level)) {
        return entity;
    }
}

function getLevelTimerTrait(level: Level) {
    for (const entity of level.entities) {
        if (entity.trait(LevelTimer)) {
            return entity.trait(LevelTimer);
        }
    }
}

export function createPlayerProgressLayer(font: Font, level: Level) {
    const LINE1 = font.sprites.width;
    const LINE2 = LINE1 * 2;
    const LINE12 = LINE1 * 12;
    const LINE14 = LINE1 * 14;
    const spriteBuffer = document.createElement('canvas');
    spriteBuffer.width = 32;
    spriteBuffer.height = 32;
    const spriteBufferContext = spriteBuffer.getContext('2d');

    return function drawPlayerProgress(context: CanvasRenderingContext2D, camera: Camera) {
        const mario: any = (getPlayerEntity(level) || { player: {}, pos: {}, draw() { } });
        const { score = 0, coins = 0, lives = 0 } = mario.player;
        const { currentTime: time = 0 } = getLevelTimerTrait(level) || {};
        const posX = Math.floor(mario.pos.x / 16);
        const posY = Math.floor(mario.pos.y / 16);

        context.globalAlpha = 1;
        font.print('MARIO', context, 16, LINE1);
        font.print(('' + score).padStart(6, '0'), context, 16, LINE2);

        font.print('%x' + ('' + lives).padStart(2, '0'), context, 96, LINE1);
        font.print('@x' + ('' + coins).padStart(2, '0'), context, 96, LINE2);
        font.print(`${posX}x${posY}`, context, 96, 0);
        
        font.print('WORLD ' + level.name, context, LINE12, LINE12);

        font.print('TIME', context, 208, LINE1);
        font.print(('' + ~~time % 999).padStart(3, '0'), context, 216, LINE2);

        spriteBufferContext.clearRect(0, 0, spriteBuffer.width, spriteBuffer.height);
        mario?.draw(spriteBufferContext);
        context.drawImage(spriteBuffer, LINE12, LINE14);
        font.print('x ' + lives, context, 8 * 14, LINE14);
    };
}
