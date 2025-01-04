import { Main } from "@widgets/main"
import classes from "./layout.module.scss"
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <div className={classes.appContainer}>
            <div className={classes.background} />
            <div className={classes.page}>
                <Main>
                    <Outlet />
                </Main>
            </div>
        </div>
    )
}
