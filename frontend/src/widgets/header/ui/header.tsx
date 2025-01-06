import { Navbar, NavBarConfig } from "@widgets/navbar"
import classes from './header.module.scss'
import { Logo } from "@shared/ui/logo"

type HeaderProps = {
    navBarConfig: NavBarConfig
}

export function Header({ navBarConfig }: HeaderProps) {
    return (
        <header className={classes.header}>
            <Logo />
            <Navbar configuration={navBarConfig} />
        </header>
    )
}
