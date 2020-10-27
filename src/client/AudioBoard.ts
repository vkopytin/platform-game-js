class AudioBoard {
    buffers = new Map<string, AudioBuffer>();

    addAudio(name: string, buffer: AudioBuffer) {
        this.buffers.set(name, buffer);
    }

    playAudio(name: string, audioContext: AudioContext) {
        const source = audioContext.createBufferSource();
        source.connect(audioContext.destination);
        source.buffer = this.buffers.get(name);
        source.start(0);
    }
}

export { AudioBoard };
