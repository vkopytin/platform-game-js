import charactersUrl = require('../img/tiles-3.png');
import { ISpriteSheet } from './ISpriteSheet';


const brick: ISpriteSheet = {
    imageUrl: charactersUrl,
    frames: [{
        name: 'brick',
        rect: [461, 39, 8, 8]
    }, {
        name: 'brick-1',
        rect: [470, 39, 8, 8]
    }, {
        name: 'brick-2',
        rect: [479, 39, 8, 8]
    }, {
        name: 'brick-3',
        rect: [488, 39, 8, 8]
    }],
    animations: [{
        name: 'turn',
        frameLen: 0.15,
        frames: ['brick', 'brick-1', 'brick-3', 'brick-2']
    }, {
        name: 'idle',
        frameLen: 0.15,
        frames: ['brick', 'brick-1', 'brick-3', 'brick-2']
    }]
};

export { brick };
