import fontUrl = require('../img/font.png');
import { ISpriteSheet } from './ISpriteSheet';


const font: ISpriteSheet = {
    imageUrl: fontUrl,
    frames: [{
        name: 'space',
        rect: [0, 0, 16, 16]
    }]
};

export { font };
