import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserFilms from "./pages/UserFilms";
import FilmPage from "./pages/FilmPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "my-films", element: <UserFilms /> },
      { path: "films/:title", element: <FilmPage /> },
    ],
  },
]);

export default router;
