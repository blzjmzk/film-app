import { useEffect, useState } from "react";
import Movie from "./entities/Movie";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserFilms from "./pages/UserFilms";

const KEY = "93104c0d";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [watched, setWatched] = useState<Movie[]>(() => {
    const storedValue = localStorage.getItem("watched");

    return storedValue ? JSON.parse(storedValue) : [];
  });

  const handleSelectMovie = (id: string) => setSelectedId(id);

  const handleAddWatched = (movie: Movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id: string | undefined) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  const handleModifyWatched = (rating: number) => {
    setWatched(
      watched.map((movie) =>
        movie.imdbID === selectedId ? { ...movie, userRating: rating } : movie
      )
    );
  };

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal } //łączymy controller z fetch
          );
          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setError("");
        } catch (err: any) {
          console.error(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return () => controller.abort();
    },
    [query]
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout query={query} setQuery={setQuery} />,
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <HomePage
              movies={movies}
              isLoading={isLoading}
              error={error}
              onSelectMovie={handleSelectMovie}
            />
          ),
        },
        {
          path: "my-films",
          element: (
            <UserFilms
              watched={watched}
              onDeleteWatched={handleDeleteWatched}
            />
          ),
        },

        {
          path: "films/:title",
          element: (
            <FilmPage
              onAddWatched={handleAddWatched}
              onModifyWatched={handleModifyWatched}
              filmId={selectedId}
              watched={watched}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
