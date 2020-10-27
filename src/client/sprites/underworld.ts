import backgroundUrl = require('../img/tiles.png');
import { ISpriteSheet } from './ISpriteSheet';


const underworld: ISpriteSheet = {
    imageUrl: backgroundUrl,
    tileW: 16,
    tileH: 16,
    tiles: [{
        name: 'ground',
        index: [0, 2]
    }, {
        name: 'sky',
        index: [13, 3]
    }]
};

export { underworld };
