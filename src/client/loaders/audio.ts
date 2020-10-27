import { AudioBoard } from '../AudioBoard';
import { mario } from './mario';
import { cannon } from './cannon';
import { koopa } from './koopa';


type SoundBoards =
    'mario'
    | 'cannon'
    | 'koopa'
    ;

export async function loadAudioBoard(name: SoundBoards, audioContext: AudioContext) {
    const loadFx = () => {
        switch (name) {
            case 'mario':
                return mario;
            case 'cannon':
                return cannon;
            case 'koopa':
                return koopa;
        }
    };
    const loadAudio = createAudioLoader(audioContext);
    const audioBoard = new AudioBoard();
    const audioSheet = loadFx();
    const jobs = Object.entries(audioSheet.fx).map(async ([key, { url }]) => {
        const buffer = await loadAudio(url);
        audioBoard.addAudio(key, buffer);
        return audioBoard;
    });
    await Promise.all(jobs);

    return audioBoard;
}

export function createAudioLoader(context: AudioContext) {
    return async function loadAudio(url: string) {
        const res = await fetch(url);
        const buffer = await res.arrayBuffer();

        return context.decodeAudioData(buffer);
    };
}
