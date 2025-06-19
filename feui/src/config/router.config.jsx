import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../Pages/homePage";
import Register from "../Pages/auth/registerPage";
import Login from "../Pages/auth/loginPage";
import LandingPage from "../Pages/LandingPage";
import Error from "../Pages/error/errorPage";



const router = createBrowserRouter([
    {
        path: "",
        element:<HomePage/>,
    },
    {
        path:"/home",
        element:<HomePage/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"*",
        element:<Error />
    },
    {
        path:"/welcome",
        element:<LandingPage />
    },
]);

const Routing =()=>{
    return(
        <>
        <RouterProvider router={router}/>
        </>
    );
}


export default Routing;

