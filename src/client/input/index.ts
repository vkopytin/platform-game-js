import { Entity } from '../Entity';
import { KeyboardState } from './KeyboardState';
import { GamepadState } from './GamepadState';
import { Jump, GoTrait } from '../traits';
import { InputRouter } from '../InputRouter';


function createJumpMotion(router: InputRouter) {
    return function jumpMotion(state: number) {
        if (state) {
            router.route((entity: Entity) => entity.trait(Jump).start());
        } else {
            router.route((entity: Entity) => entity.trait(Jump).cancel());
        }
    };
}

function createMoveRightMotion(router: InputRouter) {
    return function moveRightMotion(state: number) {
        router.route((entity: Entity) => entity.trait(GoTrait).direction += state ? 1 : -1);
    };
}

function createMoveLeftMotion(router: InputRouter) {
    return function moveLeftMotion(state: number) {
        router.route((entity: Entity) => entity.trait(GoTrait).direction += state ? -1 : 1);
    };
}

function createRollMotion(router: InputRouter) {
    return function rollMotion(state: 0 | 1) {
        router.route((entity: Entity) => entity.trait(GoTrait).turbo(state));
    }
}

export function setupKeyboard(window: Window) {
    const SPACE = 'Space';
    const RIGHT = 'ArrowRight';
    const LEFT = 'ArrowLeft';
    const input = new KeyboardState();
    const router = new InputRouter();

    input.addMapping(SPACE, createJumpMotion(router));
    input.addMapping(RIGHT, createMoveRightMotion(router));
    input.addMapping(LEFT, createMoveLeftMotion(router));

    input.listenTo(window);

    return router;
}

export function setupGamepads() {
    const SPACE = 0;
    const RIGHT = 15;
    const LEFT = 14;
    const ROLL = 1;
    const input = new GamepadState();
    const router = new InputRouter();

    input.addMapping(SPACE, createJumpMotion(router));
    input.addMapping(RIGHT, createMoveRightMotion(router));
    input.addMapping(LEFT, createMoveLeftMotion(router));
    input.addMapping(ROLL, createRollMotion(router));

    input.monitor();

    return router;
}
