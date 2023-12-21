import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import MovieList from "../components/MovieList";
import Movie from "../entities/Movie";

interface Props {
  movies: Movie[];
  isLoading: boolean;
  error?: string;
}

const HomePage = ({ movies, isLoading, error }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center mx-8">
        {isLoading && <Loader />}
        {!isLoading && !error && <MovieList movies={movies} />}
        {error && <ErrorMessage error={error} />}
      </div>
    </>
  );
};

export default HomePage;
