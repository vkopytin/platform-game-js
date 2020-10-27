import { Entity } from './Entity';


export class InputRouter {
    receivers = new Set<Entity>();

    addReceiver(receiver: Entity) {
        this.receivers.add(receiver);
    }

    dropReceiver(receiver: Entity) {
        this.receivers.delete(receiver);
    }

    route(routeInput: (entity: Entity) => any) {
        this.receivers.forEach(receiver => {
            routeInput(receiver);
        });
    }
}
