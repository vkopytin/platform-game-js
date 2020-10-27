const PRESSED = 1;
const RELEASED = 0;

export class GamepadState {
    keyStates = new Map<number, 0 | 1>();
    keyMap = new Map<number, (keyState: 0 | 1) => void>();

    addMapping(code: number, cb: (keyState: 0 | 1) => void) {
        this.keyMap.set(code, cb);
    }

    handleEvent(evnt: any) {
        const { code } = evnt;
        if (!this.keyMap.has(code)) {
            return;
        }

        const keyState = evnt.type === 'keydown' ? PRESSED : RELEASED;
        if (this.keyStates.get(code) === keyState) {
            return;
        }
        if (!this.keyStates.has(code)) {
            this.keyStates.set(code, 0);
            return;
        }

        this.keyStates.set(code, keyState);
        this.keyMap.get(code)(keyState);
    }

    startMonitor() {
        requestAnimationFrame(() => this.monitor());
    }

    monitor() {
        const gamepads = navigator.getGamepads();

        [0].forEach((index) => {
            const gamepad = gamepads[index];
            if (!gamepad) {
                return;
            }
            gamepad.buttons.forEach((button, number) => {
                this.handleEvent({
                    id: index,
                    code: number,
                    type: button.pressed ? 'keydown' : 'keyup'
                });
            });
        });

        requestAnimationFrame(() => this.monitor());
    }
}
