export type GameModel = {
    id: number
    name: string
    imageUrl: string
    genre: string
    shortDescription: string
    platform: string
    gamePageUrl: string
}

export type GameCardModel = GameModel

export type GamePage = GameModel & {
    developer: string
    publisher: string
    releaseDate: string
    description: string
    status: string
    thumbnail: string
    gameDeveloperPage: string
}
