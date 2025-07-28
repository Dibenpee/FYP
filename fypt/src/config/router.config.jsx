import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/auth/LoginPage";
import Error from "../pages/error/ErrorPage";
import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";
import AddRecords from "../pages/AddRecords";
import NewUser from "../pages/auth/NewUser";
import ComponentShowcase from "../pages/ComponentShowcase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/metrics",
    element: <ComponentShowcase />,
  },
  {
    path: "/register",
    element: <NewUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/add-record",
    element: <AddRecords />,
  },
  {
    path: "/appointments",
    element: <Dashboard />, // Placeholder for now
  },
  {
    path: "/import",
    element: <AddRecords />, // Reuse AddRecords for import
  },
  {
    path: "/profile",
    element: <Dashboard />, // Placeholder for now
  },
  {
    path: "/notifications",
    element: <Dashboard />, // Placeholder for now
  },
  {
    path: "/settings",
    element: <Dashboard />, // Placeholder for now
  },
  {
    path: "/support",
    element: <Dashboard />, // Placeholder for now
  },
  {
    path: "/logout",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
