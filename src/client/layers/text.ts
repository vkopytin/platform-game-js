import { Camera } from '../Camera';
import { Entity } from '../Entity';
import { Level } from '../levels';
import { Font } from '../loaders';
import { findPlayers } from '../player';
import { PlayerController } from '../traits';


export function createTextLayer(font: Font, text: string) {
    const LINE1 = font.sprites.width;
    const LINE2 = LINE1 * 2;
    const LINE3 = LINE1 * 3;
    const textWidth = text.length;
    const textHeight = 1;

    return function drawText(context: CanvasRenderingContext2D) {
        const screenWidth = Math.floor(context.canvas.width / LINE1);
        const screenHeight = Math.floor(context.canvas.height / LINE1);
        const x = screenWidth / 2 - textWidth / 2;
        const y = screenHeight / 2 - textHeight / 2;

        font.print(text, context, x * LINE1, y * LINE1);
    };
}
