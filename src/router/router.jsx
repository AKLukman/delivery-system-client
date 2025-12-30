import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentications/Login/Login";
import AuthLayouts from "../layouts/AuthLayouts";
import Register from "../pages/Authentications/Register/Register";
import Coverage from "../pages/Coverage/Coverage";

export const router = createBrowserRouter( [
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "coverage",
                Component: Coverage
            }
        ]
    }, {
        path: "/",
        Component: AuthLayouts,
        children: [
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            }
        ]
    }
] )