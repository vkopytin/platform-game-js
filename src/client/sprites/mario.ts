import charactersUrl = require('../img/characters.gif');
import { ISpriteSheet } from './ISpriteSheet';


const mario: ISpriteSheet = {
    imageUrl: charactersUrl,
    frames: [{
        name: 'idle',
        rect: [276, 44, 16, 16]
    }, {
        name: 'run-1',
        rect: [290, 44, 16, 16]
    }, {
        name: 'run-2',
        rect: [304, 44, 16, 16]
    }, {
        name: 'run-3',
        rect: [321, 44, 16, 16]
    }, {
        name: 'break',
        rect: [337, 44, 16, 16]
    }, {
        name: 'jump',
        rect: [355, 44, 16, 16]
    }],
    animations: [{
        name: 'run',
        frameLen: 6,
        frames: ['run-1', 'run-2', 'run-3']
    }]
};

export { mario };