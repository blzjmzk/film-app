import { useEffect, useState } from "react";
import Movie from "./entities/Movie";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import UserFilms from "./pages/UserFilms";
import useMovies from "./hooks/useMovies";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>("");
  const [watched, setWatched] = useState<Movie[]>(() => {
    const storedValue = localStorage.getItem("watched");

    return storedValue ? JSON.parse(storedValue) : [];
  });

  const { movies, isLoading, error } = useMovies(query);

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
