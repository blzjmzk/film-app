import { useEffect, useState } from "react";
import Movie from "./entities/Movie";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserFilms from "./pages/UserFilms";

const KEY = "93104c0d";
const query = "dafadfa";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong with fetching movies");
        }
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
      } catch (err: any) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
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
          element: (
            <HomePage movies={movies} isLoading={isLoading} error={error} />
          ),
        },
        { path: "my-films", element: <UserFilms /> },
        { path: "films/:title", element: <FilmPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
