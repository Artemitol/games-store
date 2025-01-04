import classes from "./game-card.module.scss"
import { Chip } from "@nextui-org/react"
import { GameCardModel } from "../model/model"
import { CardDropdown } from "./card-dropdown/card-dropdown"

export function GameCard({ game }: { game: GameCardModel }) {
    return (
        <article className={classes.card}>
            <img
                src={game.imageUrl}
                alt='game image'
                width='260'
                height='140'
                loading='lazy'
            />
            <div className={classes.content}>
                <div className={classes.row}>
                    <h4>{game.name}</h4>
                    <Chip radius='sm' color='primary'>
                        FREE
                    </Chip>
                </div>
                <div className={classes.row}>
                    <span className={classes.description}>
                        <p>{game.shortDescription}</p>
                    </span>
                </div>
                <div className={classes.row}>
                    <CardDropdown />
                    <div className='additionalInformation'>
                        <Chip>{game.genre}</Chip>
                        <div className='platform'>{game.platform}</div>
                    </div>
                </div>
            </div>
        </article>
    )
}
