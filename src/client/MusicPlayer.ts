export class MusicPlayer {
    tracks = new Map<string, HTMLAudioElement>();

    addTrack(name: string, url: string) {
        const audio = new Audio();
        audio.loop = true;
        audio.src = url;
        this.tracks.set(name, audio);
    }

    playTrack(name: string, { speed = 1, once = false } = {}) {
        return new Promise((resolve, reject) => {
            this.pauseAll();
            const audio = this.tracks.get(name);
            audio.volume = 0.1;
            once && (audio.loop = false);
            audio.playbackRate = speed;
            audio.addEventListener('ended', resolve);
            audio.addEventListener('error', reject);
            audio.play();
        });
    }

    playTheme() {
        this.playTrack('main');
    }

    async playHurryTheme() {
        await this.playTrack('hurry', { once: true });
        this.playTrack('main', { speed: 1.3 });
    }

    pauseAll() {
        this.tracks.forEach(audio => audio.pause());
    }
}
