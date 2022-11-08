import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import AllServices from "../components/Pages/AllServices/AllServices";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Register from "../components/Pages/Register/Register";
import ServiceDetails from "../components/Pages/ServiceDetails/ServiceDetails";

import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
