import { IGameContext } from '../IGameContext';
import { Scene } from './Scene';


export class TimedScene extends Scene {
    countDown = 2;

    update(gameContext: IGameContext) {
        this.countDown -= gameContext.deltaTime;
        if (this.countDown <= 0) {
            this.events.emit('sceneComplete')
        }
    }
}
