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
    id: z.string(),
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
    id: "0",
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
