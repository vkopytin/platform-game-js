declare module '*.mustache' {
    type IMustache = (...args: any[]) => string;
    const a: IMustache;
    export = a;
}

declare module '*.png' {
    const a: string;
    export = a;
}

declare module '*.gif' {
    const a: string;
    export = a;
}

declare module '*.wav' {
    const a: string;
    export = a;
}
