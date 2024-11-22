import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Pages/Homelayout";
import CardDetails from "../components/CardDetails";

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
    element: <h1>Authentication</h1>,
  },
  {
    path: "/*",
    element: <h1>error</h1>,
  },
]);

export default Router;
