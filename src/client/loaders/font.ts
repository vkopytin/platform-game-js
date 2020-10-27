import fontUrl = require('../img/font.png');
import { loadImage } from '.';
import { SpriteSheet } from '../SpriteSheet';


const CHARS = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

export class Font {
    constructor(public sprites: SpriteSheet, public size = 8) {

    }

    print(text: string, context: CanvasRenderingContext2D, x: number, y: number) {
        text.split('').forEach((char, pos) => {
            context.globalAlpha = 0.75;
            this.sprites.draw(char, context, x + pos * this.sprites.width, y);
            context.globalAlpha = 1;
        });
    }
}

export async function loadFont() {
    const fontImageDelay = loadImage(fontUrl);

    const size = 8;
    const fontImage = await fontImageDelay;
    const fontSprite = new SpriteSheet(fontImage, 8, 8);

    const rowLen = fontImage.width;
    for (let index = 0; index < CHARS.length; index++) {
        const x = index * size % rowLen;
        const y = Math.floor(index * size / rowLen) * size;
        fontSprite.define(CHARS.charAt(index), x, y, size, size);
    }

    return new Font(fontSprite, size);
}
