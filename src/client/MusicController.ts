import { IGameContext } from './IGameContext';
import { Level } from './levels';
import { MusicPlayer } from './MusicPlayer';


export class MusicController {
    player = null as MusicPlayer;

    setPlayer(musicPlayer: MusicPlayer) {
        this.player = musicPlayer;
    }

    update(level: Level, gameContext: IGameContext) {

    }

    pause() {
        this.player.pauseAll();
    }
}
