export class EventEmitter {
    listeners = [] as Array<{ name: string; handler: (...args) => any; }>;
    emit(eventName: string, ...args) {
        const handlers = this.listeners.filter(({ name }) => name === eventName);
        handlers.forEach(({ handler }) => handler(...args));
    }
    listen(name: string, handler: (...args) => any) {
        this.listeners.push({ name, handler });
    }
}
