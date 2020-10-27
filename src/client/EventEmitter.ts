export class EventEmitter {
    listeners = [] as Array<{ name: string; handler: (...args: any[]) => any; }>;
    emit(eventName: string, ...args: any[]) {
        const handlers = this.listeners.filter(({ name }) => name === eventName);
        handlers.forEach(({ handler }) => handler(...args));
    }
    listen(name: string, handler: (...args: any[]) => any) {
        this.listeners.push({ name, handler });
    }
}
