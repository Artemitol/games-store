import { maper, useGetCatalogQuery } from "@entities/game-card"
import classes from "./catalog.module.scss"
import { Button, Spinner } from "@nextui-org/react"

export function Catalog() {
    const { data, isLoading, isError } = useGetCatalogQuery()

    if (data === null) {
        return <div>Empty catalog</div>
    }

    if (isError) {
        return (
            <div>
                <span>Error acquired while parsing catalog</span>
                <Button
                    onPress={() => {
                        window.location.reload()
                    }}
                >
                    Попробовать снова
                </Button>
            </div>
        )
    }

    if (data === undefined) {
        return <div>Something went wrong with data...</div>
    }

    if (isLoading) {
        return <Spinner label='Loading catalog...' />
    }

    return <div className={classes.catalog}>{maper(data)}</div>
}
