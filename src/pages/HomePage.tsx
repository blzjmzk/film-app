import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Movie from "../entities/Movie";

interface Props {
  movies: Movie[];
}

const HomePage = ({ movies }: Props) => {
  return (
    <>
      <h2 className="text-center mt-2 mb-4">Found {movies.length} results</h2>
      <div className="flex flex-col items-center ">
        {movies.map((movie) => (
          <Link key={movie.imdbID} to={/films/ + movie.Title}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
