import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import "./main.scss"
import { router } from "./router/router"
import { store } from "./store/store"

export function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}
