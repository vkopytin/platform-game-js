import { Camera } from './Camera';


class Compositor {
    layers = [] as Array<(context: CanvasRenderingContext2D, camera: Camera) => void>;
    constructor() {
        
    }
    draw(context: CanvasRenderingContext2D, camera: Camera) {
        this.layers.forEach(layer => {
            layer(context, camera);
        });
    }
}

export { Compositor };
