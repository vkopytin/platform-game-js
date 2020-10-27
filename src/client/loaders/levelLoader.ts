import { IBackground, ILevel, Level, AvaialbelLevels } from '../levels';
import * as availableLevels from '../levels';
import { createBackgroundLayer, createSpriteLayer } from '../layers';
import { loadSpriteSheet } from './';
import { Matrix } from '../math';
import { SpriteSheet } from '../SpriteSheet';
import { Entity } from '../Entity';
import { loadMusicSheet } from './music';
import { LevelTimer, Player, Trigger } from '../traits';
import { overworld as patterns } from '../levels/patterns';


function createTimer() {
    const timer = new Entity();
    timer.addTrait(new LevelTimer());
    return timer;
}

function createTrigger() {
    const trigger = new Entity();
    trigger.addTrait(new Trigger());
    return trigger as Entity;
}

function setupBehaviour(level: Level) {
    const timer = createTimer();
    level.entities.add(timer);
    level.events.listen('timerOk', () => {
        level.music.player.playTheme();
    });
    level.events.listen('timerHurry', () => {
        level.music.player.playHurryTheme();
    });
}

function setupBackgrounds(levelSpec: ILevel, level: Level, backgroundSprites: SpriteSheet, patterns: ILevel['patterns']) {
    levelSpec.layers.forEach(layer => {
        const grid = createGrid(layer.tiles, patterns);
        const backgroundLayer = createBackgroundLayer(level, grid, backgroundSprites);
        level.comp.layers.push(backgroundLayer);
        level.addCollisionGrid(grid);
    });
}

function setupEntities(levelSpec: ILevel, level: Level, entityFactory: {[key: string]: () => Entity }) {

    levelSpec.entities?.forEach(({ name, pos: [x, y] }) => {
        const createEntity = entityFactory[name];
        const entity = createEntity();
        entity.pos.set(x, y);
        level.entities.add(entity);
    });

    const spriteLayer = createSpriteLayer(level.entities);
    level.comp.layers.push(spriteLayer);
}

function setupTriggers(levelSpec: ILevel, level: Level) {
    levelSpec.triggers?.forEach(triggerSpec => {
        const entity = createTrigger();
        entity.trait(Trigger).conditions.push((trigger, triggerers, gameContext) => {
            for (const entity of triggerers) {
                if (entity.trait(Player)) {
                    level.events.emit('trigger', triggerSpec, trigger, triggerers);
                }
            }
        });
        entity.size.x = triggerSpec.size[0];
        entity.size.y = triggerSpec.size[1];
        entity.pos.set(triggerSpec.pos[0], triggerSpec.pos[1]);
        level.entities.add(entity);
});
}

export function createLevelLoader(entityFactory: { [key: string]: () => Entity }) {
    return async function loadLevel(name: AvaialbelLevels) {
        const levelSpec = availableLevels[name];
        const level = new Level();
        level.name = name;
        const spritesDelay = loadSpriteSheet(levelSpec.spriteSheet);
        const musicPlayerDelay = loadMusicSheet(levelSpec.musicSheet);
        const backgroundSprites = await spritesDelay;
        const musicPlayer = await musicPlayerDelay;
        level.music.setPlayer(musicPlayer);

        setupBackgrounds(levelSpec, level, backgroundSprites, patterns);
        setupEntities(levelSpec, level, entityFactory);
        setupTriggers(levelSpec, level);
        setupBehaviour(level);

        return level;
    };
}

function createGrid(tiles: IBackground[], patterns: { [key: string]: { backgrounds: IBackground[] } }) {
    const grid = new Matrix<IBackground>();
    for (const { tile, x, y } of expandTiles(tiles, patterns)) {
        grid.set(x, y,  tile);
    }

    return grid;
}

function expandSpan(xStart: number, xLen: number, yStart: number, yLen: number) {
    const res = [] as Array<{ x: number; y: number; }>;
    const xEnd = xStart + xLen;
    const yEnd = yStart + yLen;

    for (let x = xStart; x < xEnd; x++) {
        for (let y = yStart; y < yEnd; y++) {
            res.push({ x, y });
        }
    }
    return res;
}

function expandRange(range: [number, number] | [number, number, number] | [number, number, number, number]) {
    switch (range.length) {
        case 4:
            var [xStart, xLen, yStart, yLen] = range;
            return expandSpan(xStart, xLen, yStart, yLen);
            break;
        case 3:
            var [xStart, xLen, yStart] = range;
            return expandSpan(xStart, xLen, yStart, 1);
            break;
        case 2:
            var [xStart, yStart] = range;
            return expandSpan(xStart, 1, yStart, 1);
    }
}

function expandRanges(ranges: Array<[number, number] | [number, number, number] | [number, number, number, number]>) {
    const res = [] as Array<{ x: number; y: number; }>;
    for (const range of ranges) {
        for (const item of expandRange(range)) {
            res.push(item);
        }
    }
    return res;
}

function expandTiles(tiles: IBackground[], patterns: { [key: string]: { backgrounds: IBackground[] } }) {
    const expandedTiles = [] as Array<{ tile: IBackground; x: number; y: number; }>;
    function walkTiles(tiles: IBackground[], offsetX = 0, offsetY = 0) {
        for (const tile of tiles) {
            for (const { x, y } of expandRanges(tile.ranges)) {
                const derivedX = x + offsetX;
                const derivedY = y + offsetY;
                if (tile.pattern) {
                    const pattern = patterns[tile.pattern].backgrounds;
                    walkTiles(pattern, derivedX, derivedY);
                } else {
                    expandedTiles.push({
                        tile,
                        x: derivedX,
                        y: derivedY
                    });
                }
            }
        }
    }

    walkTiles(tiles, 0, 0);

    return expandedTiles;
}
