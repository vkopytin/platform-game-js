import charactersUrl = require('../img/tiles-3.png');
import { ISpriteSheet } from './ISpriteSheet';


const coin: ISpriteSheet = {
    imageUrl: charactersUrl,
    frames: [{
        name: 'coin',
        rect: [325, 82, 16, 16]
    }, {
        name: 'coin-1',
        rect: [342, 82, 16, 16]
    }, {
        name: 'coin-2',
        rect: [359, 82, 16, 16]
    }, {
        name: 'coin-3',
        rect: [376, 82, 16, 16]
    }, {
        name: 'coin2-1',
        rect: [325, 99, 8, 16]
    }, {
        name: 'coin2-2',
        rect: [334, 99, 8, 16]
    }, {
        name: 'coin2-3',
        rect: [343, 99, 8, 16]
    }],
    animations: [{
        name: 'turn',
        frameLen: 0.15,
        frames: ['coin2-1', 'coin2-1', 'coin2-2', 'coin2-3', 'coin2-2']
    }, {
        name: 'idle',
        frameLen: 0.15,
        frames: ['coin', 'coin', 'coin-1', 'coin-2', 'coin-3', 'coin-2', 'coin-1']
    }]
};

export { coin };
