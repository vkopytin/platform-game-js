import { ILevel } from './ILevel';


const debugProgression: ILevel = {
    spriteSheet: 'overworld',
    musicSheet: 'silence',
    layers: [{
        tiles: [{
            name: 'sky',
            ranges: [[
                0, 212, 0, 13
            ]]
        }, {
            name: 'ground',
            type: 'ground',
            ranges: [[
                0, 212, 13, 2
            ]]
        }]
    }, {
        tiles: [{
            name: 'coin',
            type: 'coin',
            ranges: [[6, 204, 4, 9]]
        }]
    }],
    triggers: [{
        type: 'goto',
        name: 'debugCoins',
        pos: [12 * 16, 11 * 16],
        size: [ 64, 64]
    }]
};

export { debugProgression };
