import { ILevel } from './ILevel';


const debug1_1: ILevel = {
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
                0, 212, 13, 2
            ]]
        }, {
            name: 'sky',
            ranges: [[
                75, 2, 13, 2
            ], [
                92, 2, 13, 2
            ], [
                157, 2, 13, 2
            ]]
        }, {
            name: 'ground',
            type: 'ground',
            ranges: [[
                5, 3, 9
            ], [
                2, 9, 5
            ], [
                5, 7, 9
            ], [
                12, 6, 11
            ], [
                10, 2, 10
            ], [
                9, 1, 0, 7
            ]]
        }]
    }, {
        tiles: [{
            name: 'bricks',
            type: 'brick',
            ranges: [[
                27, 5, 9
            ], [
                83, 3, 9
            ], [
                86, 6, 5
            ], [
                96, 3, 5
            ], [
                99, 9
            ], [
                105, 2, 9
            ], [
                123, 5
            ], [
                126, 3, 5
            ], [
                132, 4, 5
            ], [
                133, 2, 9
            ], [
                171, 4, 9
            ]]
        }, {
            name: 'chance',
            type: 'ground',
            ranges: [[
                2, 2
            ], [
                23, 9
            ], [
                28, 9
            ], [
                30, 9
            ], [
                29, 5
            ], [
                84, 9
            ], [
                99, 5
            ], [
                114, 5
            ], [
                111, 9
            ], [
                114, 9
            ], [
                117, 9
            ], [
                133, 2, 5
            ], [
                173, 9
            ]]
        }, {
            name: 'chockolate',
            type: 'ground',
            ranges: [[
                141, 1, 9
            ], [
                140, 2, 10
            ], [
                139, 3, 11
            ], [
                138, 4, 12
            ], [
            
                144, 1, 9
            ], [
                144, 2, 10
            ], [
                144, 3, 11
            ], [
                144, 4, 12
            ], [
                
                155, 2, 9
            ], [
                154, 3, 10
            ], [
                153, 4, 11
            ], [
                152, 5, 12
            ], [
            
                159, 1, 9
            ], [
                159, 2, 10
            ], [
                159, 3, 11
            ], [
                159, 4, 12
            ], [
            
                191, 2, 5
            ], [
                190, 3, 6
            ], [
                189, 4, 7
            ], [
                188, 5, 8
            ], [
                187, 6, 9
            ], [
                186, 7, 10
            ], [
                185, 8, 11
            ], [
                184, 9, 12
            ]]
        }]
    }, {
        tiles: [{
            pattern: 'pipe-2h',
            ranges: [[
                35, 11
            ], [
                167, 11
            ], [
                182, 11
            ]]
        }, {
            pattern: 'pipe-3h',
            ranges: [[
                45, 10
            ]]
        }, {
            pattern: 'pipe-4h',
            ranges: [[
                53, 9
            ], [
                64, 9
            ]]
        }, {
            pattern: 'cloud-single',
            ranges: [[
                2, 2
            ], [
                25, 2
            ], [
                35, 3
            ], [
                44, 2
            ], [
                64, 3
            ], [
                74, 2
            ], [
                80, 3
            ], [
                90, 2
            ], [
                108, 3
            ], [
                118, 2
            ], [
                128, 3
            ], [
                138, 2
            ]]
        }],
    }, {
        tiles: [{
            pattern: 'canon-2h',
            ranges: [[3, 11]]
        }]
    }, {
        tiles: [{
            name: 'coin',
            type: 'coin',
            ranges: [[5, 4, 6, 3]]
        }, {
            name: 'coin',
            type: 'coin',
            ranges: [[12, 9, 5, 3]]
        }, {
            name: 'coin',
            type: 'coin',
            ranges: [[39, 3, 6, 2]]
        }]
    }],
    entities: [{
        name: 'cannon',
        pos: [3 * 16, 11 * 16]
    }, {
        name: 'koopa',
        pos: [260, 0]
    }, {
        name: 'goomba',
        pos: [220, 0]
    }, {
        name: 'goomba',
        pos: [800, 0]
    }, {
        name: 'goomba',
        pos: [906, 0]
    }, {
        name: 'goomba',
        pos: [930, 0]
    }, {
        name: 'goomba',
        pos: [1340, 0]
    }, {
        name: 'goomba',
        pos: [2260, 0]
    }, {
        name: 'goomba',
        pos: [2400, 0]
    }, {
        name: 'goomba',
        pos: [2800, 0]
    }, {
        name: 'goomba',
        pos: [3100, 0]
    }],
    triggers: [{
        type: 'goto',
        name: 'level1_2',
        pos: [200 * 16, 0],
        size: [16, 14 * 16]
    }]
};

export { debug1_1 };
