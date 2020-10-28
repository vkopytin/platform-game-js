import { ILevel } from './ILevel';


const offset = 12;

const level1_1: ILevel = {
    spriteSheet: 'overworld',
    musicSheet: 'mario',
    layers: [{
        tiles: [{
            name: 'sky',
            ranges: [[
                0, 212, 0, 13 + 4 * offset
            ]]
        }, {
            name: 'ground',
            type: 'ground',
            ranges: [[
                -1, 1, 0 + offset, 13
            ]]
        }, {
            name: 'ground',
            type: 'ground',
            ranges: [[
                0, 212, 13 + offset, 2
            ], [
                0, 212, 13 + 2 * offset, 2
            ]]
        }, {
            name: 'sky',
            ranges: [[
                69, 2, 13 + offset, 2
            ], [
                86, 3, 13 + offset, 2
            ], [
                153, 2, 13 + offset, 2
            ]]
        }]
    }, {
        tiles: [{
            pattern: 'green-hill-single-3h',
            ranges: [[0, 10 + offset]]
        }, {
            pattern: 'green-hill-single-2h',
            ranges: [[15, 11 + offset]]
        }, {
            pattern: 'green-hill-single-3h',
            ranges: [[48, 10 + offset]]
        }, {
            pattern: 'green-hill-single-2h',
            ranges: [[63, 11 + offset]]
        }, {
            pattern: 'green-hill-single-3h',
            ranges: [[96, 10 + offset]]
        }, {
            pattern: 'green-hill-single-2h',
            ranges: [[111, 11 + offset]]
        }, {
            pattern: 'green-hill-single-3h',
            ranges: [[144, 10 + offset]]
        }, {
            pattern: 'green-hill-single-2h',
            ranges: [[159, 11 + offset]]
        }, {
            pattern: 'green-hill-single-3h',
            ranges: [[192, 10 + offset]]
        }, {
            pattern: 'green-hill-single-2h',
            ranges: [[207, 10 + offset]]
        }]
    }, {
        tiles: [{
            pattern: 'green-bush-triple-1h',
            ranges: [[11, 12 + offset]]
        }, {
            pattern: 'green-bush-single-1h',
            ranges: [[23, 12 + offset]]
        }, {
            pattern: 'green-bush-double-1h',
            ranges: [[41, 12 + offset]]
        }, {
            pattern: 'green-bush-triple-1h',
            ranges: [[59, 12 + offset]]
        }, {
            pattern: 'green-bush-single-1h',
            ranges: [[71, 12 + offset]]
        }, {
            pattern: 'green-bush-double-1h',
            ranges: [[89, 12 + offset]]
        }, {
            pattern: 'green-bush-triple-1h',
            ranges: [[107, 12 + offset]]
        }, {
            pattern: 'green-bush-single-1h',
            ranges: [[119, 12 + offset]]
        }, {
            pattern: 'green-bush-double-1h',
            ranges: [[137, 12 + offset]]
        }, {
            pattern: 'green-bush-triple-1h',
            ranges: [[155, 12 + offset]]
        }, {
            pattern: 'green-bush-single-1h',
            ranges: [[167, 12 + offset]]
        }, {
            pattern: 'green-bush-single-1h',
            ranges: [[206, 12 + offset]]
        }]
    }, {
        tiles: [{
            pattern: 'cloud-single',
            ranges: [[8, 3 + offset]]
        }, {
            pattern: 'cloud-single',
            ranges: [[19, 2 + offset]]
        }, {
            pattern: 'cloud-triple',
            ranges: [[27, 3 + offset]]
        }, {
            pattern: 'cloud-double',
            ranges: [[36, 2 + offset]]
        }, {
            pattern: 'cloud-single',
            ranges: [[56, 3 + offset]]
        }, {
            pattern: 'cloud-single',
            ranges: [[67, 2 + offset]]
        }, {
            pattern: 'cloud-triple',
            ranges: [[75, 3 + offset]]
        }, {
            pattern: 'cloud-double',
            ranges: [[84, 2 + offset]]
        }, {
            pattern: 'cloud-single',
            ranges: [[104, 3 + offset]]
        }, {
            pattern: 'cloud-single',
            ranges: [[115, 2 + offset]]
        }, {
            pattern: 'cloud-triple',
            ranges: [[123, 3 + offset]]
        }, {
            pattern: 'cloud-double',
            ranges: [[132, 2 + offset]]
        }, {
            pattern: 'cloud-single',
            ranges: [[152, 3 + offset]]
        }, {
            pattern: 'cloud-single',
            ranges: [[163, 2 + offset]]
        }, {
            pattern: 'cloud-triple',
            ranges: [[171, 3 + offset]]
        }, {
            pattern: 'cloud-double',
            ranges: [[180, 2 + offset]]
        }, {
            pattern: 'cloud-single',
            ranges: [[200, 3 + offset]]
        }]
    }, {
        tiles: [{
            name: 'bricks',
            type: 'brick',
            ranges: [
                [20, 9 + offset], [22, 9 + offset], [24, 9 + offset],
                [77, 9 + offset], [79, 9 + offset], [80, 8, 5 + offset, 1], [91, 3, 5 + offset, 1],
                [94, 9 + offset], [100, 9 + offset], [+101, 9 + offset],
                [118, 9 + offset], [121, 3, 5 + offset, 1],
                [128, 5 + offset], [129, 2, 9 + offset, 1], [131, 5 + offset],
                [168, 2, 9 + offset, 1], [171, 9 + offset]
            ]
        }]
    }, {
        tiles: [{
            name: 'chance',
            type: 'chance',
            ranges: [
                [16, 9 + offset], [+21, 9 + offset], [22, 5 + offset], [23, 9 + offset], [+64, 8 + offset], [78, 9 + offset], [94, 5 + offset],
                [106, 9 + offset], [109, 5 + offset], [109, 9 + offset], [112, 9 + offset], [129, 2, 5 + offset, 1], [170, 9 + offset]
            ]
        }]
    }, {
        tiles: [{
            pattern: 'pipe-2h',
            ranges: [[28, 11 + offset]]
        }, {
            pattern: 'pipe-3h',
            ranges: [[38, 10 + offset]]
        }, {
            pattern: 'pipe-4h',
            ranges: [[46, 9 + offset]]
        }, {
            pattern: 'pipe-4h',
            ranges: [[57, 9 + offset]]
        }, {
            pattern: 'pipe-2h',
            ranges: [[163, 11 + offset]]
        }, {
            pattern: 'pipe-2h',
            ranges: [[179, 11 + offset]]
        }]
    }, {
        tiles: [{
            name: 'chockolate',
            type: 'ground',
            ranges: [
                [134, 12 + offset], [135, 1, 11 + offset, 2], [136, 1, 10 + offset, 3], [137, 1, 9 + offset, 4],
                [140, 1, 9 + offset, 4], [141, 1, 10 + offset, 3], [142, 1, 11 + offset, 2], [143, 12 + offset],
                [148, 12 + offset], [149, 1, 11 + offset, 2], [150, 1, 10 + offset, 3], [151, 1, 9 + offset, 4], [152, 1, 9 + offset, 4],
                [155, 1, 9 + offset, 4], [156, 1, 10 + offset, 3], [157, 1, 11 + offset, 2], [158, 12 + offset],
                [181, 12 + offset], [182, 1, 11 + offset, 2], [183, 1, 10 + offset, 3], [184, 1, 9 + offset, 4], [185, 1, 8 + offset, 5], [186, 1, 7 + offset, 6], [187, 1, 6 + offset, 7], [188, 1, 5 + offset, 8], [189, 1, 5 + offset, 8]
            ]
        }]
    }],
    entities: false ? [] : [{
        name: 'goomba-cannon',
        pos: [22 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [40 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [51 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [53 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [80 * 16, 4 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [82 * 16, 4 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [97 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [99 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [114 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [116 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [124 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [126 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [128 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [130 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [174 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'goomba-cannon',
        pos: [176 * 16, 12 * 16 + offset * 16]
    }, {
        name: 'koopa',
        pos: [107 * 16, 12 * 16 + offset * 16]
    }],
    triggers: [{
        type: 'goto',
        name: 'level1_2',
        pos: [200 * 16, 0 + offset * 16],
        size: [16, 14 * 16 + offset * 16]
    }]
};

export { level1_1 };
