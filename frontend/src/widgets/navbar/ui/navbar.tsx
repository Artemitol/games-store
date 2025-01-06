import { Link } from "@nextui-org/react"
import { NavBarConfig } from "../model/model"

type NavbarProps = {
    configuration: NavBarConfig
}

export function Navbar({ configuration }: NavbarProps) {
    let linkId = 1

    return (
        <nav>
            <ul>
                {configuration.map((el) => (
                    <Link key={linkId++} href={el.path}>
                        {el.value}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}
