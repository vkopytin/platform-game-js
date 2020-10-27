import { AvaialbleSpriteSheets } from '../sprites';
import * as allSheets from '../sprites';
import { SpriteSheet } from '../SpriteSheet';
import { createAnim } from '../animation';
import { ISpriteSheet } from '../sprites/ISpriteSheet';
import { loadImage } from '.';


export async function loadSpriteSheet(name: AvaialbleSpriteSheets) {
    const sheetSpec = allSheets[name] as ISpriteSheet;
    const imageDelay = loadImage(sheetSpec.imageUrl);
    const image = await imageDelay;
    const sprites = new SpriteSheet(
        image,
        sheetSpec.tileW,
        sheetSpec.tileH
    );
    sheetSpec.tiles?.forEach(({ name, index: [x, y]}) => {
        sprites.defineTile(name, x, y);
    });

    sheetSpec.frames?.forEach(({ name, rect }) => {
        sprites.define(name, ...rect);
    });

    sheetSpec.animations?.forEach(({ name, frames, frameLen }) => {
        const animation = createAnim(frames, frameLen);
        sprites.defineAnim(name, animation);
    });

    return sprites;
}