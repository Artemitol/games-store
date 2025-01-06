import { ReactNode } from "react"
import { GameCardModel } from "../model/model"
import { GameCard } from "../ui/game-card"

export const maper = (elements: GameCardModel[]): ReactNode => {
    const result = elements.map((el) => <GameCard key={el.id} game={el} />)

    return result
}
