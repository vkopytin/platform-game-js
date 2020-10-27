const PRESSED = 1;
const RELEASED = 0;

export class KeyboardState {
    keyStates = new Map<number, 0 | 1>();
    keyMap = new Map<string, (keyState: 0 | 1) => void>();

    addMapping(code: string, cb: (keyState: 0 | 1) => void) {
        this.keyMap.set(code, cb);
    }

    handleEvent(evnt: any) {
        const { code } = evnt;
        if (!this.keyMap.has(code)) {
            return;
        }

        evnt.preventDefault();
        const keyState = evnt.type === 'keydown' ? PRESSED : RELEASED;
        if (this.keyStates.get(code) === keyState) {
            return;
        }

        this.keyStates.set(code, keyState);
        this.keyMap.get(code)(keyState);
    }
    listenTo(wnd: Window) {
        ['keydown', 'keyup'].forEach(eventName => {
            wnd.addEventListener(eventName, evnt => this.handleEvent(evnt));
        });
    }
}
