import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Pages/Homelayout";
import CardDetails from "../components/CardDetails";
import AuthLayout from "../Pages/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPassword from "../Pages/ForgetPassword";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
  {
    path: "/:id",
    element: <CardDetails></CardDetails>,
    loader: async ({ params }) => {
      const responce = await fetch("/card.json");
      const res = await responce.json();
      const data = await res.adventures.find((d) => d.id == params.id);
      return data;
    },
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>error</h1>,
  },
]);

export default Router;
