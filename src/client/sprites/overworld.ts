import backgroundUrl = require('../img/tiles.png');
import { ISpriteSheet } from './ISpriteSheet';


const overworld: ISpriteSheet = {
    imageUrl: backgroundUrl,
    tileW: 16,
    tileH: 16,
    tiles: [{
        name: 'ground',
        index: [0, 0]
    }, {
        name: 'sky',
        index: [3, 23]
    }, {
        name: 'chockolate',
        index: [0, 1]
    }, {
        name: 'bricks',
        index: [1, 0]
    }, {
        name: 'chance',
        index: [24, 0]
    }, {
        name: 'chance-1',
        index: [24, 0]
    }, {
        name: 'chance-2',
        index: [25, 0]
    }, {
        name: 'chance-3',
        index: [26, 0]

    }, {
        name: 'coin-1',
        index: [24, 1]
    }, {
        name: 'coin-2',
        index: [25, 1]
    }, {
        name: 'coin-3',
        index: [26, 1]
    }, {
        
        name: 'pipe-top-l',
        index: [0, 8]
    }, {
        name: 'pipe-top-r',
        index: [1, 8]
    }, {
        name: 'pipe-bot-l',
        index: [0, 9]
    }, {
        name: 'pipe-bot-r',
        index: [1, 9]
    }, {
        
        name: 'cloud-1-1',
        index: [0, 20]
    }, {
        name: 'cloud-1-2',
        index: [1, 20]
    }, {
        name: 'cloud-1-3',
        index: [2, 20]
    }, {
        name: 'cloud-2-1',
        index: [0, 21]
    }, {
        name: 'cloud-2-2',
        index: [1, 21]
    }, {
        name: 'cloud-2-3',
        index: [2, 21]
    }, {
        name: 'canon-1',
        index: [9, 0]
    }, {
        name: 'canon-2',
        index: [8, 1]
    }, {
        name: 'canon-3',
        index: [9, 1]
    }, {
        name: 'green-hill1-1',
        index: [8, 8]
    }, {
        name: 'green-hill1-2',
        index: [9, 8]
    }, {
        name: 'green-hill1-3',
        index: [10, 8]
    }, {
        name: 'green-hill2-1',
        index: [8, 9]
    }, {
        name: 'green-hill2-2',
        index: [9, 9]
    }, {
        name: 'green-hill2-3',
        index: [10, 9]
    }, {
        name: 'green-bush1-1',
        index: [11, 9]
    }, {
        name: 'green-bush1-2',
        index: [12, 9]
    }, {
        name: 'green-bush1-3',
        index: [13, 9]
    }, {
        name: 'green-bush2-1',
        index: [18, 8]
    }, {
        name: 'green-bush2-2',
        index: [19, 8]
    }, {
        name: 'green-bush2-3',
        index: [20, 8]
    }],
    animations: [{
        name: 'chance',
        frameLen: 0.15,
        frames: ['chance-1', 'chance-1', 'chance-2', 'chance-3', 'chance-2']
    }, {
        name: 'coin',
        frameLen: 0.15,
        frames: ['coin-1', 'coin-1', 'coin-2', 'coin-3', 'coin-2']
    }]
};

export { overworld };
