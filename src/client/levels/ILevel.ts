import { AvaialbelLevels } from '.';
import { AvaialbleSpriteSheets } from '../sprites';
import { TileTypes, TileNames } from '../sprites';


export interface IBackground {
    name?: TileNames;
    type?: TileTypes;
    pattern?: string;
    ranges: Array<
        [number, number]
        | [number, number, number]
        | [number, number, number, number]
    >;
}

export interface ILevel {
    spriteSheet: AvaialbleSpriteSheets;
    musicSheet: 'mario' | 'silence';
    layers: Array<{
        tiles: IBackground[];
    }>;
    patterns?: { [key: string]: { backgrounds: IBackground[] } },
    entities?: Array<{
        name: string;
        pos: [number, number?];
    }>;
    triggers?: Array<{
        type: 'goto';
        name: AvaialbelLevels;
        pos: [number, number];
        size: [number, number];
    }>;
}
