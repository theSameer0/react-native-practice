export interface Image {
    uri: string,
}
export interface MovieData {
    id: string,
    name: string,
    language: string,
    image : string,
    headImage : string,
    tags: string[],
    comment: string,
}

export interface TheatreData {
    id: string,
    name: string,
    location: string,
    image: string,
}
