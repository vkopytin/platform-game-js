export function loadImage(url: string) {
    return new Promise<HTMLImageElement>((resolve) => {
        const onLoad = () => {
            img.removeEventListener('load', onLoad);
            resolve(img);
        };
        const img = new Image();
        img.addEventListener('load', onLoad);
        img.src = url;
    });
}

export * from './sprite';
export * from './levelLoader';
export * from './font';
export * from './audio';
