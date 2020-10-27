import { ILevel } from './ILevel';
import { level1_1 } from './1-1';
import { level2_1 } from './2-1';

const all_upper: ILevel = {
    spriteSheet: 'overworld',
    musicSheet: 'mario',
    layers: [...level1_1.layers, ...level2_1.layers],
    patterns: { ...level1_1.patterns, ...level2_1.patterns }
};

export { all_upper };
