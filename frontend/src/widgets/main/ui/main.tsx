import classes from "./main.module.scss"
import { ReactNode } from "react"

export function Main({ children }: { children: ReactNode }) {
    return <div className={classes.main}>{children}</div>
}
