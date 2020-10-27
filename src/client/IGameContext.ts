import { AudioBoard } from './AudioBoard';
import { Entity } from './Entity';
import { loadEntities } from './entities';


type UnPromisifiedObject<T> = {[k in keyof T]: UnPromisify<T[k]>}
type UnPromisify<T> = T extends Promise<infer U> ? U : T;

export interface IGameContext {
    audioContext: AudioContext;
    deltaTime: number;
    entityFactory: Partial<UnPromisify<ReturnType<typeof loadEntities>>>;
    videoContext: CanvasRenderingContext2D;
}
