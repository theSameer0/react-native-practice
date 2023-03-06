export interface MovieData {
    key: number,
    name: string,
    language: NodeRequire,
    image : NodeRequire,
    headImage : string,
    tags: string[],
    comment: string,
}

export interface TheatreData {
    id: string,
    name: string,
    comment: string,
    image: NodeRequire,
    timings : string[],
}