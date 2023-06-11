import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Classes from "../Pages/classes/Classes";
import AddClass from "../Pages/DashBoard/AddClass";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret";
import ManageUsers from "../Pages/DashBoard/ManageUsers";
import ManageClasses from "../Pages/DashBoard/ManageClasses";
import MyClasses from "../Pages/DashBoard/MyClasses";
import MySelectedClass from "../Pages/DashBoard/MySelectedClass";
import MyEnrolledClass from "../Pages/DashBoard/MyEnrolledClass";


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
            {
                path:'secret',
                element : <PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ]
    },
    {
        path:'dashboard',
        element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'mySelectedClasses',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'myEnrolledClasses',
                element: <MyEnrolledClass></MyEnrolledClass>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClass',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
        ]
    },
]);
export default router;