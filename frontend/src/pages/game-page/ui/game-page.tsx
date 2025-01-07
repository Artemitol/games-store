import { useGetCatalogQuery } from "@entities/game-card"
import { Spinner } from "@nextui-org/react"
import { useParams } from "react-router-dom"
import { z } from "zod"

export function GamePage() {
    const id = z.number().parse(Number(useParams().id))
    const { data, isLoading } = useGetCatalogQuery()

    if (data === null) {
        return <div>Catalog of games is empty...</div>
    }
    if (data === undefined) {
        return <div>Something went wrong with data...</div>
    }
    if (isLoading === null) {
        return <Spinner label='fetching new data please wait...' />
    }

    return <div>{data[id].title}</div>
}
