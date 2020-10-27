import { ILevel } from './ILevel';


const level1_2: ILevel = {
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
    entities: [{
        name: 'coin',
        pos: [20, 100]
    }],
    triggers: [{
        type: 'goto',
        name: 'level2_1',
        pos: [200 * 16, 0],
        size: [16, 14 * 16]
    }]
};

export { level1_2 };
