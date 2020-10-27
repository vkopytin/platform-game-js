import { IBackground, Level } from '../levels';
import { Camera } from '../Camera';
import { Entity } from '../Entity';
import { TileCollider } from '../TileCollider';
import { TileResolver } from '../TileResolver';


function createEntityLayer(entities: Set<Entity>) {
    return function drawBoundingBox(context: CanvasRenderingContext2D, camera: Camera) {
        context.strokeStyle = 'red';
        context.globalAlpha = 0.5;
        entities.forEach((entity) => {
            context.beginPath();
            context.rect(
                Math.floor(entity.bounds.left - camera.pos.x),
                Math.floor(entity.bounds.top - camera.pos.y),
                entity.size.x, entity.size.y
            );
            context.stroke();
        });
    };
}

function createTileCandidateLayer(tileResolver: TileResolver<IBackground>) {
    const resolvedTiles = [] as Array<{ x; y; }>;
    const tileSize = tileResolver.tileSize;

    const getByIndexOriginal = tileResolver.getByIndex;
    tileResolver.getByIndex = function getByIndexFake(x: number, y: number) {
        resolvedTiles.push({ x, y });

        return getByIndexOriginal.call(tileResolver, x, y);
    };

    return function drawTileCandidates(context: CanvasRenderingContext2D, camera: Camera) {
        context.strokeStyle = 'blue';
        context.globalAlpha = 0.5;
        resolvedTiles.forEach(({ x, y }) => {
            context.beginPath();
            context.rect(
                Math.floor(x * tileSize - camera.pos.x),
                Math.floor(y * tileSize - camera.pos.y),
                tileSize, tileSize
            );
            context.stroke();
        });
        context.globalAlpha = 1;

        resolvedTiles.length = 0;
    };
}

export function createCollisionLayer(level: Level) {

    const drawTileCandidates = level.tileCollider.resolvers.map(createTileCandidateLayer);
    const drawBoundingBoxes = createEntityLayer(level.entities);

    return function drawCollision(context: CanvasRenderingContext2D, camera: Camera) {
        drawTileCandidates.map(fn => fn(context, camera));
        drawBoundingBoxes(context, camera);
    };
}
