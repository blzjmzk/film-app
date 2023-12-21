import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Movie from "../entities/Movie";

interface Props {
  movies: Movie[];
  isLoading: boolean;
}

const HomePage = ({ movies, isLoading }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center ">
        {isLoading ? (
          <span className="loading loading-dots loading-lg mt-28"></span>
        ) : (
          <>
            <h2 className="text-center mt-2 mb-4">
              Found {movies.length} results
            </h2>

            {movies.map((movie) => (
              <Link key={movie.imdbID} to={`/films/${movie.Title}`}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
