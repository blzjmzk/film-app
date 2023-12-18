import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserFilms from "./pages/UserFilms";
import FilmPage from "./pages/FilmPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "my-films", element: <UserFilms /> },
      { path: "film", element: <FilmPage /> },
    ],
  },
]);

export default router;
