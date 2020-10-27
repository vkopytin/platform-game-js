import charactersUrl = require('../img/enemies.gif');
import { ISpriteSheet } from './ISpriteSheet';


const bullet: ISpriteSheet = {
    imageUrl: charactersUrl,
    frames: [{
        name: 'flat',
        rect: [165, 355, 16, 14]
    }, {
        name: 'bullet',
        rect: [184, 355, 16, 14]
    }, {
        name: 'bullet-1',
        rect: [202, 355, 16, 14]
    }],
    animations: [{
        name: 'walk',
        frameLen: 0.30,
        frames: ['bullet-1', 'bullet']
    }]
};

export { bullet };
