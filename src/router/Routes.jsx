import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/MainLayout";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import AddJob from "../Pages/AddJob";
import MyAcceptedTasks from "../Pages/MyAcceptedTasks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import PrivetRoute from "./PrivetRoute";
import MyAddedJobs from "../Pages/MyAddedJobs";
import UpdateJob from "../Pages/UpdateJob";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/allJobs",
                element: <AllJobs />,
            },
            {
                path: "/addJob",
                element: <PrivetRoute><AddJob /></PrivetRoute>,
            },
            {
                path: "/my-accepted-tasks",
                element: <PrivetRoute><MyAcceptedTasks /></PrivetRoute>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/jobDetails/:id",
                element: <PrivetRoute><JobDetails /></PrivetRoute>,
            },
            {
                path: "/myAddedJobs",
                element: <PrivetRoute><MyAddedJobs /></PrivetRoute>,
            },
            {
                path: "/updateJob/:id",
                element: <PrivetRoute><UpdateJob /></PrivetRoute>,
            }
        ]
    }
]);

export default router;