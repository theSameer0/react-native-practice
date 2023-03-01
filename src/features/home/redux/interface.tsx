export interface MovieData {
    key: number,
    name: string,
    language: string,
    image : NodeRequire,
    headImage : NodeRequire,
    tags: string[],
    comment: string,
}

export interface TheatreData {
    name: string,
    comment: string,
    image: NodeRequire,
    timings : string[],
}