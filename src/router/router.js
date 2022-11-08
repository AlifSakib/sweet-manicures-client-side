import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import AddServices from "../components/Pages/AddServices/AddServices";
import AllServices from "../components/Pages/AllServices/AllServices";
import Blog from "../components/Pages/Blog/Blog";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Login from "../components/Pages/Login/Login";
import EditReview from "../components/Pages/MyReviews/EditReview";
import MyReviews from "../components/Pages/MyReviews/MyReviews";
import Register from "../components/Pages/Register/Register";
import ServiceDetails from "../components/Pages/ServiceDetails/ServiceDetails";

import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/editreview/:id",
        element: (
          <PrivateRoute>
            <EditReview></EditReview>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
