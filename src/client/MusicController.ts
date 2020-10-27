import { MusicPlayer } from './MusicPlayer';


export class MusicController {
    player = null as MusicPlayer;

    setPlayer(musicPlayer: MusicPlayer) {
        this.player = musicPlayer;
    }

    update(level, gameContext) {

    }

    pause() {
        this.player.pauseAll();
    }
}
