import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/MainLayout";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import AddJob from "../Pages/AddJob";
import MyAcceptedTasks from "../Pages/MyAcceptedTasks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import ServiceDetails from "../Pages/ServiceDetails";
import MyProfile from "../Pages/MyProfile";
import PrivetRoute from "./PrivetRoute";
import ForgetPass from "../Pages/ForgetPass";

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
                element: <AddJob />,
            },
            {
                path: "/my-accepted-tasks",
                element: <MyAcceptedTasks />,
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
                path: "/service/:id",
                element: <ServiceDetails />,
            },
            {
                path: "/my-profile",
                element: <PrivetRoute><MyProfile /></PrivetRoute>,
            },
            {
                path: "/forget-password",
                element: <ForgetPass />,
            }
        ]
    }
]);

export default router;