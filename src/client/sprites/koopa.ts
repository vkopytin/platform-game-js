import charactersUrl = require('../img/characters.gif');
import { ISpriteSheet } from './ISpriteSheet';


const koopa: ISpriteSheet = {
    imageUrl: charactersUrl,
    frames: [{
        name: 'hiding',
        rect: [144, 206, 16, 24]
    }, {
        name: 'hiding-with-legs',
        rect: [163, 206, 16, 24]
    }, {
        name: 'walk-1',
        rect: [296, 206, 16, 24]
    }, {
        name: 'walk-2',
        rect: [315, 206, 16, 24]
    }],
    animations: [{
        name: 'walk',
        frameLen: 0.15,
        frames: ['walk-1', 'walk-2']
    }, {
        name: 'wake',
        frameLen: 0.15,
        frames: ['hiding', 'hiding-with-legs']
    }]
};

export { koopa };
