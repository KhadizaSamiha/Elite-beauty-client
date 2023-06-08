import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Classes from "../Pages/classes/Classes";
import AddClass from "../Pages/DashBoard/AddClass";


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
                path:'/classes',
                element : <Classes></Classes>
            },
        ]
    },
    {
        path:'dashboard',
        element : <Dashboard></Dashboard>,
        children: [
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            }
        ]
    },
]);
export default router;