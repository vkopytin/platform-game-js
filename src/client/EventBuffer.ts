export class EventBuffer {
    events = [] as Array<{ name: string; args; }>;

    emit(name: string, ...args) {
        this.events.push({ name, args });
    }

    process(eventName: string, callback: (...args) => any) {
        this.events.forEach(({name, args}) => {
            if (name === eventName) {
                callback(...args);
            }
        });
    }

    clear() {
        this.events.length = 0;
    }
}
