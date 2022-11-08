import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import AddServices from "../components/Pages/AddServices/AddServices";
import AllServices from "../components/Pages/AllServices/AllServices";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Login from "../components/Pages/Login/Login";
import MyReviews from "../components/Pages/MyReviews/MyReviews";
import Register from "../components/Pages/Register/Register";
import ServiceDetails from "../components/Pages/ServiceDetails/ServiceDetails";
import AuthProvider from "../contexts/AuthProvider";

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
        path: "/myreviews",
        element: (
          <AuthProvider>
            <MyReviews></MyReviews>
          </AuthProvider>
        ),
      },
      {
        path: "/addservices",
        element: <AddServices></AddServices>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
