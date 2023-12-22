import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import MovieList from "../components/MovieList";
import Movie from "../entities/Movie";

interface Props {
  movies: Movie[];
  isLoading: boolean;
  error?: string;
  onSelectMovie: (id: string) => void;
}

const HomePage = ({ movies, isLoading, error, onSelectMovie }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center mx-8">
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <MovieList movies={movies} onSelectMovie={onSelectMovie} />
        )}
        {error && <ErrorMessage error={error} />}
      </div>
    </>
  );
};

export default HomePage;
