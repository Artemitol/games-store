import {
    Dropdown,
    DropdownTrigger,
    Button,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react"

export function CardDropdown() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button isIconOnly size='sm'></Button>
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownItem>Добавить в избранное</DropdownItem>
                <DropdownItem>Пожаловаться</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
