import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import PropertyDetails from "../pages/PropertyDetails";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ProtectedRoute from "../components/ProtectedRoute";

const route = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
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
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signup',
                Component: Signup
            }
        ]
    }
]);

export { route };