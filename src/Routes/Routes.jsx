import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Classes from "../Pages/classes/Classes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element : <Home></Home>
            },
            {
                path:'/login',
                element : <Login></Login>
            },
            {
                path:'/signUp',
                element : <SignUp></SignUp>
            },
            {
                path:'/dashboard',
                element : <Dashboard></Dashboard>
            },
            {
                path:'/classes',
                element : <Classes></Classes>
            },
        ]
    },
]);
export default router;