import { Camera } from '../Camera';
import { Entity } from '../Entity';
import { Level } from '../levels';
import { Font } from '../loaders';
import { findPlayers } from '../player';
import { LevelTimer, Player, PlayerController } from '../traits';


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

export function createDashboardLayer(font: Font, level: Level) {
    const LINE1 = font.sprites.width;
    const LINE2 = LINE1 * 2;
    const LINE3 = LINE1 * 3;

    return function drawDashboard(context: CanvasRenderingContext2D, camera: Camera) {
        const mario = getPlayerEntity(level);
        if (!mario) {
            return;
        }
        const { score = 0, coins = 0, lives = 0 } = mario?.trait(Player);
        const { currentTime: time = 0 } = getLevelTimerTrait(level) || {};
        const posX = Math.floor(mario.pos.x / 16);
        const posY = Math.floor(mario.pos.y / 16);

        font.print('MARIO', context, 16, LINE1);
        font.print(('' + score).padStart(6, '0'), context, 16, LINE2);

        font.print('%x' + ('' + lives).padStart(2, '0'), context, 96, LINE1);
        font.print('@x' + ('' + coins).padStart(2, '0'), context, 96, LINE2);
        font.print(`${posX}x${posY}`, context, 96, 0);
        
        font.print('WORLD', context, 152, LINE1);
        font.print(level.name, context, 144, LINE2);

        font.print('TIME', context, 208, LINE1);
        font.print(('' + ~~time % 999).padStart(3, '0'), context, 216, LINE2);
    };
}