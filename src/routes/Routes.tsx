import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import SandboxPage from "../pages/Sandbox/Sandbox.tsx";
import LoginPage from "../pages/Login/LoginPage.tsx";
import UserHomePage from "../pages/UserHomePage/UserHomePage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <HomePage/>},
            {path: "login", element: <LoginPage/>},
            {path: "user/:userId/home", element: <UserHomePage/>},
            {path: "sandbox", element: <SandboxPage/>},  // TODO: remove
        ],
    },
]);
