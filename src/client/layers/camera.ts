import { Camera } from '../Camera';


export function createCameraLayer(cameraToDraw: Camera) {
    return function drawCameraRect(context: CanvasRenderingContext2D, fromCamera: Camera) {
        context.strokeStyle = 'purple';
        context.beginPath();
        context.rect(
            Math.floor(cameraToDraw.pos.x - fromCamera.pos.x),
            Math.floor(cameraToDraw.pos.y - fromCamera.pos.y),
            cameraToDraw.size.x, cameraToDraw.size.y
        );
        context.stroke();
    };
}
