import { AudioBoard } from '../AudioBoard';
import { MusicPlayer } from '../MusicPlayer';


const mario = {
    main: {
        url: require('../sounds/music/mario_08.wav')
    },
    hurry: {
        url: require('../sounds/music/hurry-up.mp3')
    }
};

const silence = {
    main: {
        url: ''
    }
};

type SoundBoards =
    'mario'
    | 'silence'
    ;

export async function loadMusicSheet(name: SoundBoards) {
    const loadFx = () => {
        switch (name) {
            case 'mario':
                return mario;
            case 'silence':
                return silence;
        }
    };
    const musicSheet = loadFx();
    const musicPlayer = new MusicPlayer();
    for (const [name, track] of Object.entries(musicSheet)) {
        musicPlayer.addTrack(name, track.url);
    }
    return musicPlayer;
}
