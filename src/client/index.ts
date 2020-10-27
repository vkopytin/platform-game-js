import { AudioBoard } from './AudioBoard';
import { loadEntities } from './entities';
import { Entity } from './Entity';
import { IGameContext } from './IGameContext';
import { setupGamepads, setupKeyboard } from './input';
import { createCameraLayer, createCollisionLayer, createColorLayer, createDashboardLayer, createTextLayer } from './layers';
import { createCameraOverlayLayer } from './layers/camera-overlay';
import { createPlayerProgressLayer } from './layers/player-progress';
import { AvaialbelLevels, Scene, TimedScene } from './levels';
import { createLevelLoader } from './loaders';
import { loadFont } from './loaders/font';
import { createPlayer, createPlayerEnv } from './player';
import { SceneRunner } from './SceneRunner';
import { Timer } from './Timer';
import { Player } from './traits';


const canvas = document.querySelector('#screen') as HTMLCanvasElement;
const videoContext = canvas.getContext('2d');
videoContext.imageSmoothingEnabled = false;
const audioContext = new AudioContext();

(async () => {
    const fontDelay = loadFont();
    const entityFactory = await loadEntities(audioContext);
    const loadLevel = createLevelLoader(entityFactory);
    const sceneRunner = new SceneRunner();
    const font = await fontDelay;
    const audioBoard = new AudioBoard();

    const mario = createPlayer(entityFactory.mario);

    const kbRouter = setupKeyboard(window);
    kbRouter.addReceiver(mario);
    const padRouter = setupGamepads();
    padRouter.addReceiver(mario);

    //setupMouseControl(canvas, mario, level.camera);

    async function runLevel(name: AvaialbelLevels) {
        const loadScreen = new Scene();
        loadScreen.comp.layers.push(createColorLayer('#00a000'));
        loadScreen.comp.layers.push(createTextLayer(font, `Loading, ${name}...`));
        sceneRunner.addScene(loadScreen);

        const levelDelay = loadLevel(name);
        const level = await levelDelay;
        sceneRunner.runNext();

        level.events.listen('trigger', (spec, trigger, touches: Set<Entity>) => {
            if (spec.type === 'goto') {
                for (const entity of touches) {
                    if (entity.trait(Player)) {
                        return runLevel(spec.name);
                    }
                }
            }
        });

        const dashboardLayer = createDashboardLayer(font, level);
        const playerProgressLayer = createPlayerProgressLayer(font, level);

        const playerEnv = createPlayerEnv(mario);
        level.entities.add(playerEnv);

        const waitScreen = new TimedScene();
        waitScreen.comp.layers.push(createColorLayer('#000'));
        waitScreen.comp.layers.push(dashboardLayer);
        waitScreen.comp.layers.push(playerProgressLayer);
        sceneRunner.addScene(waitScreen);

        //level.comp.layers.push(createCollisionLayer(level));
        //level.comp.layers.push(createCameraLayer(level.camera));
        //level.comp.layers.push(createCameraOverlayLayer(level.camera));
        level.comp.layers.push(dashboardLayer);
        sceneRunner.addScene(level);

        sceneRunner.runNext();
    }

    const gameContext: IGameContext = {
        entityFactory,
        videoContext,
        audioContext,
        deltaTime: null,
    };

    const timer = new Timer(1/60);
    timer.update = function update(deltaTime) {
        gameContext.deltaTime = deltaTime;
        sceneRunner.update(gameContext);
    }

    timer.start();
    runLevel('level1_1');
})();
