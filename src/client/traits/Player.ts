import { Entity } from '../Entity';
import { IGameContext } from '../IGameContext';
import { Level } from '../levels';
import { Trait } from './Trait';


const COIN_LIVE_THRESHOLD = 100;

export class Player extends Trait {
    coins = 0;
    lives = 4;
    score = 0;

    constructor() {
        super('player');

        this.listen('stomp', () => {
            this.score += 100;
        });
    }

    addCoins(count = 1) {
        this.coins += count;
        this.queue(entity => entity.sounds.add('marioCoin'));
        if (this.coins >= COIN_LIVE_THRESHOLD) {
            const lifeCount = Math.floor(this.coins / COIN_LIVE_THRESHOLD);
            this.addLives(lifeCount);
            this.coins = this.coins % COIN_LIVE_THRESHOLD;
        }
    }

    addLives(count = 1) {
        this.lives += count;
    }
}
