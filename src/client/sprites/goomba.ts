import charactersUrl = require('../img/characters.gif');
import { ISpriteSheet } from './ISpriteSheet';


const goomba: ISpriteSheet = {
    imageUrl: charactersUrl,
    frames: [{
        name: 'walk-1',
        rect: [296, 187, 16, 16]
    }, {
        name: 'walk-2',
        rect: [315, 187, 16, 16]
    }, {
        name: 'flat',
        rect: [277, 187, 16, 16]
    }],
    animations: [{
        name: 'walk',
        frameLen: 0.15,
        frames: ['walk-1', 'walk-2']
    }]  
};

export { goomba };
