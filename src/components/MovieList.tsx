import { Link } from "react-router-dom";
import Movie from "../entities/Movie";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
  onSelectMovie: (id: string) => void;
}

const MovieList = ({ movies, onSelectMovie }: Props) => {
  return (
    <>
      {movies.length > 0 ? (
        <>
          <h2 className="text-center mt-2 mb-4">
            Found {movies.length} results
          </h2>
          {movies.map((movie) => (
            <Link key={movie.imdbID} to={`/films/${movie.Title}`}>
              <MovieCard movie={movie} onSelectMovie={onSelectMovie} />
            </Link>
          ))}
        </>
      ) : (
        <h2 className="text-center mt-16 mb-4 text-lg max-w-xl">
          Welcome to the Film App! You can search for movies and rate the ones
          you've already watched - you'll see them later in the "My Movies" tab!
        </h2>
      )}
    </>
  );
};

export default MovieList;
