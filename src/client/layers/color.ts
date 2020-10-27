import { Camera } from '../Camera';
import { Entity } from '../Entity';
import { Level } from '../levels';
import { Font } from '../loaders';
import { findPlayers } from '../player';
import { PlayerController } from '../traits';


export function createColorLayer(color: string) {

    return function drawColor(context: CanvasRenderingContext2D) {
        context.fillStyle = color;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    };
}
