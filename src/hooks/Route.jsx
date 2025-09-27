import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";

const route = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])

export { route }