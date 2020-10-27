import { Camera } from '../Camera';
import map = require('../img/1-1.png');


export function createCameraOverlayLayer(cameraToDraw: Camera) {
    const image = new Image();
    image.src = map;
    return function drawCameraOverlayRect(context: CanvasRenderingContext2D, fromCamera: Camera) {
        context.globalAlpha = 0.3;
        context.drawImage(
            image,
            fromCamera.pos.x,
            fromCamera.pos.y + 0 * 16,
            fromCamera.size.x,
            fromCamera.size.y,
            Math.floor(cameraToDraw.pos.x - fromCamera.pos.x),
            Math.floor(cameraToDraw.pos.y - fromCamera.pos.y),
            cameraToDraw.size.x, cameraToDraw.size.y
        );
    };
}
