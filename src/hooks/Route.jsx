import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import PropertyDetails from "../pages/PropertyDetails";

const route = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/property/:id',
                Component: PropertyDetails
            }
        ]
    }
])

export { route }