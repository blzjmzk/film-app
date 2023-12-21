import { useEffect, useState } from "react";
import Movie from "./entities/Movie";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserFilms from "./pages/UserFilms";

const KEY = "93104c0d";
const query = "private ryan";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(function () {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);
    }
    fetchMovies();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage movies={movies} /> },
        { path: "my-films", element: <UserFilms /> },
        { path: "films/:title", element: <FilmPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;