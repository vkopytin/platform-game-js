import { ILevel } from './ILevel';


const debugCoins: ILevel = {
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
    }]
};

export { debugCoins };
