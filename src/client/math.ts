export class Matrix<T> {
    grid = [] as Array<Array<T>>;
    set(x, y, value: T) {
        if (!this.grid[x]) {
            this.grid[x] = [];
        }
        this.grid[x][y] = value;
    }
    get(x, y) {
        const col = this.grid[x];
        if (col) {
            return col[y];
        }
    }

    forEach(cb: (item: T, x: number, y: number) => void) {
        this.grid.forEach((column, x) => {
            column.forEach((value, y) => cb(value, x, y));
        });
    }

    delete(x, y) {
        const col = this.grid[x];
        if (col) {
            delete col[y];
        }
    }
}

export class Vec2 {
    x = 0;
    y = 0;
    constructor(x = 0, y = 0) {
        this.set(x, y);
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    copy(vec2: Vec2) {
        this.x = vec2.x;
        this.y = vec2.y;
    }
}
