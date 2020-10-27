import { Camera } from './Camera';
import { Entity } from './Entity';


export function setupMouseControl(canvas: HTMLCanvasElement, entity: Entity, camera: Camera) {
    let lastEvent: any;
    ['mousedown', 'mousemove'].forEach(eventName => {
        canvas.addEventListener(eventName, (evnt: any) => {
            const { buttons, offsetX, offsetY } = evnt;
            if (buttons === 2) {
                entity.vel.set(0, 0);
                entity.pos.set(
                    offsetX + camera.pos.x,
                    offsetY + camera.pos.y
                );
            } else if (
                buttons === 1
                && lastEvent
                && lastEvent.buttons === 1
                && lastEvent.type === 'mousemove'
            ) {
                camera.pos.x -= offsetX - lastEvent.offsetX;
            }
            lastEvent = evnt;
        });
        canvas.addEventListener('contextmenu', evnt => evnt.preventDefault());
    });
}
