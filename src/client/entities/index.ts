import { loadMario } from './mario';
import { loadGoomba } from './goomba';
import { loadKoopa } from './koopa';
import { loadBullet } from './bullet';
import { loadCannon } from './cannon';
import { loadCoin } from './coin';
import { loadBrick } from './brick';
import { loadGoombaCannon } from './goomba-cannon';


export async function loadEntities(audioContext: AudioContext) {
    const marioDelay = loadMario(audioContext);
    const goombaDelay = loadGoomba(audioContext);
    const koopaDelay = loadKoopa(audioContext);
    const bulletDelay = loadBullet(audioContext);
    const cannonDelay = loadCannon(audioContext);
    const coin = loadCoin(audioContext);
    const brick = loadBrick(audioContext);
    const goombaCannon = loadGoombaCannon(audioContext);

    return {
        mario: await marioDelay,
        goomba: await goombaDelay,
        koopa: await koopaDelay,
        bullet: await bulletDelay,
        cannon: await cannonDelay,
        coin: await coin,
        brick: await brick,
        'goomba-cannon': await goombaCannon
    };
}
