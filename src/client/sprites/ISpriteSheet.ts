import { ITile } from './ITile';


export interface ITileFrame {
    name: string;
    rect: [number, number, number, number]
}

export interface IAnimation {
    name: string;
    frameLen: number;
    frames: string[]
}

export interface ISpriteSheet {
    imageUrl: string;
    tileW?: number;
    tileH?: number;
    tiles?: ITile[];
    frames?: ITileFrame[];
    animations?: IAnimation[];
}
