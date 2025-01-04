import { Layout } from "../layout"
import { Spinner } from "@nextui-org/react"
import { Homepage } from "@pages/home-page"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: (
            <Spinner
                style={{ marginTop: "7rem" }}
                label='Oups... Application crashed or this page doesn`t exist'
                color='danger'
                labelColor='danger'
            />
        ),
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
        ],
    },
])
