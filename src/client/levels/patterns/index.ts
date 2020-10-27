import { ILevel } from '../ILevel';


export const overworld: ILevel['patterns'] = {
    'green-bush-single-1h': {
        backgrounds: [{
            name: 'green-bush1-1',
            ranges: [[0, 0]]
        }, {
            name: 'green-bush1-2',
            ranges: [[1, 0]]
        }, {
            name: 'green-bush1-3',
            ranges: [[2, 0]]
        }]
    },
    'green-bush-double-1h': {
        backgrounds: [{
            name: 'green-bush1-1',
            ranges: [[0, 0]]
        }, {
            name: 'green-bush1-2',
            ranges: [[1, 0]]
        }, {
            name: 'green-bush1-2',
            ranges: [[2, 0]]
        }, {
            name: 'green-bush1-3',
            ranges: [[3, 0]]
        }]
    },
    'green-bush-triple-1h': {
        backgrounds: [{
            name: 'green-bush1-1',
            ranges: [[0, 0]]
        }, {
            name: 'green-bush1-2',
            ranges: [[1, 0]]
        }, {
            name: 'green-bush1-2',
            ranges: [[2, 0]]
        }, {
            name: 'green-bush1-2',
            ranges: [[3, 0]]
        }, {
            name: 'green-bush1-3',
            ranges: [[4, 0]]
        }]
    },
    'green-hill-single-2h': {
        backgrounds: [{
            name: 'green-hill1-2',
            ranges: [[2, 0]]
        }, {
            name: 'green-hill1-1',
            ranges: [[1, 1]]
        }, {
            name: 'green-hill2-1',
            ranges: [[2, 1]]
        }, {
            name: 'green-hill1-3',
            ranges: [[3, 1]]
        }]
    },
    'green-hill-single-3h': {
        backgrounds: [{
            name: 'green-hill1-2',
            ranges: [[2, 0]]
        }, {
            name: 'green-hill1-1',
            ranges: [[1, 1]]
        }, {
            name: 'green-hill2-1',
            ranges: [[2, 1]]
        }, {
            name: 'green-hill1-3',
            ranges: [[3, 1]]
        }, {
            name: 'green-hill1-1',
            ranges: [[0, 2]]
        }, {
            name: 'green-hill2-1',
            ranges: [[1, 2]]
        }, {
            name: 'green-hill2-2',
            ranges: [[2, 2]]
        }, {
            name: 'green-hill2-3',
            ranges: [[3, 2]]
        }, {
            name: 'green-hill1-3',
            ranges: [[4, 2]]
        }]
    },
    'cloud-single': {
        backgrounds: [{
            name: 'cloud-1-1',
            ranges: [[0, 0]]
        }, {
            name: 'cloud-1-2',
            ranges: [[1, 0]]
        }, {
            name: 'cloud-1-3',
            ranges: [[2, 0]]
        }, {
            name: 'cloud-2-1',
            ranges: [[0, 1]]
        }, {
            name: 'cloud-2-2',
            ranges: [[1, 1]]
        }, {
            name: 'cloud-2-3',
            ranges: [[2, 1]]
        }]
    },
    'cloud-double': {
        backgrounds: [{
            name: 'cloud-1-1',
            ranges: [[0, 0]]
        }, {
            name: 'cloud-1-2',
            ranges: [[1, 0]]
        }, {
            name: 'cloud-1-2',
            ranges: [[2, 0]]
        }, {
            name: 'cloud-1-3',
            ranges: [[3, 0]]
        }, {
            name: 'cloud-2-1',
            ranges: [[0, 1]]
        }, {
            name: 'cloud-2-2',
            ranges: [[1, 1]]
        }, {
            name: 'cloud-2-2',
            ranges: [[2, 1]]
        }, {
            name: 'cloud-2-3',
            ranges: [[3, 1]]
        }]
    },
    'cloud-triple': {
        backgrounds: [{
            name: 'cloud-1-1',
            ranges: [[0, 0]]
        }, {
            name: 'cloud-1-2',
            ranges: [[1, 0]]
        }, {
            name: 'cloud-1-2',
            ranges: [[2, 0]]
        }, {
            name: 'cloud-1-2',
            ranges: [[3, 0]]
        }, {
            name: 'cloud-1-3',
            ranges: [[4, 0]]
        }, {
            name: 'cloud-2-1',
            ranges: [[0, 1]]
        }, {
            name: 'cloud-2-2',
            ranges: [[1, 1]]
        }, {
            name: 'cloud-2-2',
            ranges: [[2, 1]]
        }, {
            name: 'cloud-2-2',
            ranges: [[3, 1]]
        }, {
            name: 'cloud-2-3',
            ranges: [[4, 1]]
        }]
    },
    'pipe-cap': {
        backgrounds: [{
            name: 'pipe-top-l',
            type: 'ground',
            ranges: [[0, 0]]
        }, {
            name: 'pipe-top-r',
            type: 'ground',
            ranges: [[1, 0]]
        }]
    },
    'pipe-vert': {
        backgrounds: [{
            name: 'pipe-bot-l',
            type: 'ground',
            ranges: [[0, 0]]
        }, {
            name: 'pipe-bot-r',
            type: 'ground',
            ranges: [[1, 0]]
        }]
    },
    'pipe-2h': {
        backgrounds: [{
            pattern: 'pipe-cap',
            ranges: [[0, 0]]
        }, {
            pattern: 'pipe-vert',
            ranges: [[0, 1]]
        }]
    },
    'pipe-3h': {
        backgrounds: [{
            pattern: 'pipe-cap',
            ranges: [[0, 0]]
        }, {
            pattern: 'pipe-vert',
            ranges: [[0, 1], [0, 2]]
        }]
    },
    'pipe-4h': {
        backgrounds: [{
            pattern: 'pipe-cap',
            ranges: [[0, 0]]
        }, {
            pattern: 'pipe-vert',
            ranges: [[0, 1], [0, 2], [0, 3]]
        }]
    },
    'pipe-5h': {
        backgrounds: [{
            pattern: 'pipe-cap',
            ranges: [[0, 0]]
        }, {
            pattern: 'pipe-vert',
            ranges: [[0, 1], [0, 2], [0, 3], [0, 4]]
        }]
    },
    'canon-2h': {
        backgrounds: [{
            name: 'canon-1',
            type: 'ground',
            ranges: [[0, 0]]
        }, {
            name: 'canon-3',
            type: 'ground',
            ranges: [[0, 1]]
        }]
    }
};
