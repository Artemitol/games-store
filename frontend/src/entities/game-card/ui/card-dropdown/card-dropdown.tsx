import {
    Dropdown,
    DropdownTrigger,
    Button,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react"
import { PlusIcon } from "@shared/ui/icons"

export function CardDropdown() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button isIconOnly size='sm' className='p-1'>
                    <PlusIcon />
                </Button>
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownItem>Currently playing</DropdownItem>
                <DropdownItem>Played</DropdownItem>
                <DropdownItem>Completed</DropdownItem>
                <DropdownItem>Play</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
