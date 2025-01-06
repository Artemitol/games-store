import { z } from "zod"

export type GameModel = {
    id: number
    title: string
    thumbnail: string
    genre: string
    short_description: string
    platform: string
    freetogame_profile_url: string
}

//------------------------------------------------------------------------

export const GameCardDTOschema = z.object({
    id: z.number(),
    title: z.string(),
    freetogame_profile_url: z.string(),
    genre: z.string(),
    platform: z.string(),
    short_description: z.string(),
    thumbnail: z.string(),
})

// Creates TS type based on zod schema
export type GameCardModel = z.infer<typeof GameCardDTOschema>

export const defaultGameCardValue: GameCardModel = {
    id: 0,
    title: "",
    freetogame_profile_url: "",
    genre: "",
    platform: "",
    short_description: "",
    thumbnail: "",
}

//------------------------------------------------------------------------

export const GamePageDTOschema = GameCardDTOschema.extend({
    game_url: z.string(),
    developer: z.string(),
    publisher: z.string(),
    release_date: z.string(),
})

// Creates TS type based on zod schema 
export type GamePageModel = z.infer<typeof GamePageDTOschema>

// {
//             "id": 582,
//             "title": "Tarisland",
//             "thumbnail": "https://www.freetogame.com/g/582/thumbnail.jpg",
//             "short_description": "A cross-platform MMORPG developed by Level Infinite and Published by Tencent.",
//             "game_url": "https://www.freetogame.com/open/tarisland",
//             "genre": "MMORPG",
//             "platform": "PC (Windows)",
//             "publisher": "Tencent",
//             "developer": "Level Infinite",
//             "release_date": "2024-06-22",
//             "freetogame_profile_url": "https://www.freetogame.com/tarisland"
//         },
