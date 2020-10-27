import { IGameContext } from './IGameContext';
import { Scene } from './levels';

export class SceneRunner {
    sceneIndex = -1;
    scenes = [] as Scene[];

    addScene(scene: Scene) {
        scene.events.listen('sceneComplete', () => {
            this.runNext();
        });
        this.scenes.push(scene);
    }

    runNext() {
        const currentScene = this.scenes[this.sceneIndex];
        if (currentScene) {
            currentScene.pause();
        }
        this.sceneIndex++;
    }

    update(gameContext: IGameContext) {
        const currentScene = this.scenes[this.sceneIndex];
        if (!currentScene) {
            return;
        }

        currentScene.update(gameContext);
        currentScene.draw(gameContext);
    }
}
