import { Link } from "react-router-dom";
import Movie from "../entities/Movie";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  return (
    <>
      <h2 className="text-center mt-2 mb-4">Found {movies.length} results</h2>
      {movies.map((movie) => (
        <Link key={movie.imdbID} to={`/films/${movie.Title}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </>
  );
};

export default MovieList;
