import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";

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
    ],
  },
]);
