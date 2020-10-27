import { Entity } from './Entity';
import { Level } from './levels';
import { Player, PlayerController, Solid } from './traits';


export function createPlayerEnv(playerEntity: Entity) {
    const playerEnv = new Entity();
    const playerController = new PlayerController();
    playerController.setPlayer(playerEntity as any);
    playerEnv.addTrait(new Solid());
    playerEnv.addTrait(playerController);

    return playerEnv as Entity;
}

export function createPlayer<Y extends Entity>(create: () => Y) {
    const entity = create();
    entity.addTrait(new Player());

    return entity;
}

export function* findPlayers(level: Level) {
    for (const entity of level.entities) {
        if (entity?.trait(Player)) {
            yield entity;
        }
    }
}
