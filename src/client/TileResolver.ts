import { Matrix } from './math';


export class TileResolver<T> {
    constructor(public matrix: Matrix<T>, public tileSize = 16) {

    }

    toIndex(pos: number) {
        return Math.floor(pos / this.tileSize);
    }

    toIndexRange(pos1: number, pos2: number) {
        const pMax = Math.ceil(pos2 / this.tileSize) * this.tileSize;
        const range = [] as number[];
        let pos = pos1;
        do {
            range.push(this.toIndex(pos));
            pos += this.tileSize;
        } while (pos < pMax);

        return range;
    }

    getByIndex(indexX: number, indexY: number) {
        const tile = this.matrix.get(indexX, indexY);
        if (tile) {
            const x1 = indexX * this.tileSize;
            const x2 = x1 + this.tileSize;
            const y1 = indexY * this.tileSize;
            const y2 = y1 + this.tileSize;
            return {
                tile,
                indexX,
                indexY,
                x1, x2,
                y1, y2
            };
        }
    }

    searchByPosition(posX: number, posY: number) {
        return this.getByIndex(
            this.toIndex(posX),
            this.toIndex(posY)
        );
    }

    searchByRange(x1: number, x2: number, y1: number, y2: number) {
        const matches = [] as ReturnType<TileResolver<T>['getByIndex']>[];
        this.toIndexRange(x1, x2).forEach(indexX => {
            this.toIndexRange(y1, y2).forEach(indexY => {
                const match = this.getByIndex(indexX, indexY);
                matches.push(match);
            });
        });

        return matches;
    }
}
