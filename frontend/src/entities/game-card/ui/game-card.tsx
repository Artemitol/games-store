import classes from "./game-card.module.scss"
import { Chip } from "@nextui-org/react"
import { GameCardModel } from "../model/model"
import { CardDropdown } from "./card-dropdown/card-dropdown"
import { useNavigate } from "react-router-dom"

export function GameCard({ game }: { game: GameCardModel }) {
    const navigate = useNavigate()

    return (
        <article
            className={classes.card}
            onClick={() => {
                navigate(`/games/${game.id}`)
            }}
        >
            <img
                className={classes.image}
                src={game.thumbnail}
                alt='game image'
                width='260'
                height='140'
                loading='lazy'
            />
            <div className={classes.content}>
                <div className={classes.row}>
                    <h4 className={classes.title}>{game.title}</h4>
                    <Chip radius='sm' size='sm' color='primary'>
                        FREE
                    </Chip>
                </div>
                <div className={classes.row}>
                    <span className={classes.description}>
                        <p className={classes.descriptionValue}>
                            {game.short_description}
                        </p>
                    </span>
                </div>
                <div className={classes.row}>
                    <CardDropdown />
                    <div className={classes.additionalInformation}>
                        <Chip radius='sm' size='sm'>
                            {game.genre}
                        </Chip>
                        <div className={classes.platform}>{game.platform}</div>
                    </div>
                </div>
            </div>
        </article>
    )
}
