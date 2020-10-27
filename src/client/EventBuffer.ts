export class EventBuffer {
    events = [] as Array<{ name: string; args: any[]; }>;

    emit(name: string, ...args: any[]) {
        this.events.push({ name, args });
    }

    process(eventName: string, callback: (...args: any[]) => any) {
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
