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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage movies={movies} isLoading={isLoading} />,
        },
        { path: "my-films", element: <UserFilms /> },
        { path: "films/:title", element: <FilmPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
