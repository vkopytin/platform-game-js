export class Timer {
    updateProxy: (t: number) => void;
    update = (t: number) => { };

    constructor(deltaTime = 1 / 60) {
        let lastTime = 0;
        let accumulatedTime = 0;

        this.updateProxy = (time) => {
            if (!lastTime) {
                lastTime = time;
                this.enqueue();
                return;
            }
            accumulatedTime += (time - lastTime) / 1000;

            if (accumulatedTime > 1) {
                accumulatedTime = 1;
            }

            while (accumulatedTime > deltaTime) {
                this.update(deltaTime);
                accumulatedTime -= deltaTime;
            }
            lastTime = time;
            this.enqueue();
        };
    }

    enqueue() {
        requestAnimationFrame(this.updateProxy);
    }
    
    start() {
        this.enqueue();
    }
}
