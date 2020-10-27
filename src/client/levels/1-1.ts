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
            name: 'bricks',
            type: 'brick',
            ranges: [
                [20, 9], [22, 9], [24, 9],
                [77, 9], [79, 9], [80, 8, 5, 1], [91, 3, 5, 1],
                [94, 9], [100, 9], [+101, 9],
                [118, 9], [121, 3, 5, 1],
                [128, 5], [129, 2, 9, 1], [131, 5],
                [168, 2, 9, 1], [171, 9]
            ]
        }]
    }, {
        tiles: [{
            name: 'chance',
            type: 'chance',
            ranges: [
                [16, 9], [+21, 9], [22, 5], [23, 9], [+64, 8], [78, 9], [94, 5],
                [106, 9], [109, 5], [109, 9], [112, 9], [129, 2, 5, 1], [170, 9]
            ]
        }]
    }, {
        tiles: [{
            pattern: 'pipe-2h',
            ranges: [[28, 11]]
        }, {
            pattern: 'pipe-3h',
            ranges: [[38, 10]]
        }, {
            pattern: 'pipe-4h',
            ranges: [[46, 9]]
        }, {
            pattern: 'pipe-4h',
            ranges: [[57, 9]]
        }, {
            pattern: 'pipe-2h',
            ranges: [[163, 11]]
        }, {
            pattern: 'pipe-2h',
            ranges: [[179, 11]]
        }]
    }, {
        tiles: [{
            name: 'chockolate',
            type: 'ground',
            ranges: [
                [134, 12], [135, 1, 11, 2], [136, 1, 10, 3], [137, 1, 9, 4],
                [140, 1, 9, 4], [141, 1, 10, 3], [142, 1, 11, 2], [143, 12],
                [148, 12], [149, 1, 11, 2], [150, 1, 10, 3], [151, 1, 9, 4], [152, 1, 9, 4],
                [155, 1, 9, 4], [156, 1, 10, 3], [157, 1, 11, 2], [158, 12],
                [181, 12], [182, 1, 11, 2], [183, 1, 10, 3], [184, 1, 9, 4], [185, 1, 8, 5], [186, 1, 7, 6], [187, 1, 6, 7], [188, 1, 5, 8], [189, 1, 5, 8]
            ]
        }]
    }],
    entities: false ? [] : [{
        name: 'goomba-cannon',
        pos: [22 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [40 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [51 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [53 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [80 * 16, 4 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [82 * 16, 4 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [97 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [99 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [114 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [116 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [124 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [126 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [128 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [130 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [174 * 16, 12 * 16]
    }, {
        name: 'goomba-cannon',
        pos: [176 * 16, 12 * 16]
    }, {
        name: 'koopa',
        pos: [107 * 16, 12 * 16]
    }],
    triggers: [{
        type: 'goto',
        name: 'level1_2',
        pos: [200 * 16, 0],
        size: [16, 14 * 16]
    }]
};

export { level1_1 };
