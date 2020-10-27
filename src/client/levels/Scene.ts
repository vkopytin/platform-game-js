import { Compositor } from '../Compositor';
import { EventEmitter } from '../EventEmitter';
import { IGameContext } from '../IGameContext';


export class Scene {
    comp = new Compositor();
    events = new EventEmitter();

    draw(gameContext: IGameContext) {
        this.comp.draw(gameContext.videoContext, null);
    }

    update(gameContext: IGameContext) {

    }

    pause() {
        
    }
}
