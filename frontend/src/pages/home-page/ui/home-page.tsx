import { GameCard } from "@entities/game-card"

export function Homepage() {
    return (
        <>
            <GameCard
                game={{
                    gamePageUrl: "",
                    genre: "action",
                    id: 1,
                    imageUrl: "",
                    name: "dota",
                    platform: "ps5",
                    shortDescription:
                        "Worst game ever in this universe for console",
                }}
            />
        </>
    )
}
