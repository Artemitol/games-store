import { GameCard } from "@entities/game-card"

export function Homepage() {
    return (
        // <>
        //     <div className='w-dvw h-dvh bg-slate-950 absolute -z-50' />
        //     <div className='h-full main text-white flex items-center justify-center'>
        //         <Main>Hello world!</Main>
        //     </div>
        // </>

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
