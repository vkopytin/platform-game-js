import { ILevel } from './ILevel';


const level1_1: ILevel = {
    spriteSheet: 'overworld',
    musicSheet: 'mario',
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
                -1, 1, 0, 13
            ]]
        }, {
            name: 'ground',
            type: 'ground',
            ranges: [[
                0, 212, 13, 2
            ]]
        }, {
            name: 'sky',
            ranges: [[
                69, 2, 13, 2
            ], [
                86, 3, 13, 2
            ], [
                153, 2, 13, 2
            ]]
        }]
    }, {
        tiles: [{
            pattern: 'green-hill-single-3h',
            ranges: [[0, 10]]
        }, {
            pattern: 'green-hill-single-2h',
            ranges: [[15, 11]]
        }, {
            pattern: 'green-hill-single-3h',
            ranges: [[48, 10]]
        }, {
            pattern: 'green-hill-single-2h',
            ranges: [[63, 11]]
        }, {
            pattern: 'green-hill-single-3h',
            ranges: [[96, 10]]
        }, {
            pattern: 'green-hill-single-2h',
            ranges: [[111, 11]]
        }, {
            pattern: 'green-hill-single-3h',
            ranges: [[144, 10]]
        }, {
            pattern: 'green-hill-single-2h',
            ranges: [[159, 11]]
        }, {
            pattern: 'green-hill-single-3h',
            ranges: [[192, 10]]
        }, {
            pattern: 'green-hill-single-2h',
            ranges: [[207, 10]]
        }]
    }, {
        tiles: [{
            pattern: 'green-bush-triple-1h',
            ranges: [[11, 12]]
        }, {
            pattern: 'green-bush-single-1h',
            ranges: [[23, 12]]
        }, {
            pattern: 'green-bush-double-1h',
            ranges: [[41, 12]]
        }, {
            pattern: 'green-bush-triple-1h',
            ranges: [[59, 12]]
        }, {
            pattern: 'green-bush-single-1h',
            ranges: [[71, 12]]
        }, {
            pattern: 'green-bush-double-1h',
            ranges: [[89, 12]]
        }, {
            pattern: 'green-bush-triple-1h',
            ranges: [[107, 12]]
        }, {
            pattern: 'green-bush-single-1h',
            ranges: [[119, 12]]
        }, {
            pattern: 'green-bush-double-1h',
            ranges: [[137, 12]]
        }, {
            pattern: 'green-bush-triple-1h',
            ranges: [[155, 12]]
        }, {
            pattern: 'green-bush-single-1h',
            ranges: [[167, 12]]
        }, {
            pattern: 'green-bush-single-1h',
            ranges: [[206, 12]]
        }]
    }, {
        tiles: [{
            pattern: 'cloud-single',
            ranges: [[8, 3]]
        }, {
            pattern: 'cloud-single',
            ranges: [[19, 2]]
        }, {
            pattern: 'cloud-triple',
            ranges: [[27, 3]]
        }, {
            pattern: 'cloud-double',
            ranges: [[36, 2]]
        }, {
            pattern: 'cloud-single',
            ranges: [[56, 3]]
        }, {
            pattern: 'cloud-single',
            ranges: [[67, 2]]
        }, {
            pattern: 'cloud-triple',
            ranges: [[75, 3]]
        }, {
            pattern: 'cloud-double',
            ranges: [[84, 2]]
        }, {
            pattern: 'cloud-single',
            ranges: [[104, 3]]
        }, {
            pattern: 'cloud-single',
            ranges: [[115, 2]]
        }, {
            pattern: 'cloud-triple',
            ranges: [[123, 3]]
        }, {
            pattern: 'cloud-double',
            ranges: [[132, 2]]
        }, {
            pattern: 'cloud-single',
            ranges: [[152, 3]]
        }, {
            pattern: 'cloud-single',
            ranges: [[163, 2]]
        }, {
            pattern: 'cloud-triple',
            ranges: [[171, 3]]
        }, {
            pattern: 'cloud-double',
            ranges: [[180, 2]]
        }, {
            pattern: 'cloud-single',
            ranges: [[200, 3]]
        }]
    }, {
        tiles: [{
            name: 'chance',
            type: 'ground',
            ranges: [[16, 9], [21, 9], [22, 5], [23, 9]]
        }]
    }, {
        tiles: [{
            name: 'bricks',
            type: 'brick',
            ranges: [[20, 9], [22, 9], [24, 9]]
        }]
    }, {
        tiles: [{
            pattern: 'pipe-2h',
            ranges: [[28, 11]]
        }, {
            pattern: 'pipe-3h',
            ranges: [[38, 10]]
        }]
    }],
    entities: [],
    triggers: [{
        type: 'goto',
        name: 'level1_2',
        pos: [200 * 16, 0],
        size: [16, 14 * 16]
    }]
};

export { level1_1 };
