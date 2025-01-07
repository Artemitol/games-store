import { maper, useGetCatalogQuery } from "@entities/game-card"
import classes from "./catalog.module.scss"
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Spinner,
    useDisclosure,
} from "@nextui-org/react"
import { useEffect } from "react"

export function Catalog() {
    const { data, isLoading, isError, isFetching, refetch } =
        useGetCatalogQuery()

    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

    useEffect(() => {
        if (isFetching && !isLoading) {
            // Opens modal that informing user about loading
            onOpen()
        } else {
            // Closes modal
            onClose()
        }
    }, [isFetching])

    //------------------------Render

    if (data === undefined) {
        return <div>Something went wrong with data...</div>
    }

    if (data === null || Object.keys(data).length === 0) {
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

    if (isLoading) {
        return <Spinner label='Loading catalog...' />
    }

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalHeader>Fetching data</ModalHeader>
                    <ModalBody>
                        Currently fetching new data for you, our dear user! You
                        need to wait a second...
                    </ModalBody>
                    <ModalFooter>
                        <Spinner label='loading...' />
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Button
                onPress={() => {
                    refetch()
                }}
            >
                Refetch
            </Button>
            <div className={classes.catalog}>{maper(Object.values(data))}</div>
        </>
    )
}
