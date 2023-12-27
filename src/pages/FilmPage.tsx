import MovieDetails from "../components/MovieDetails";
import Movie from "../entities/Movie";

interface Props {
  filmId: string;
  onAddWatched: (movie: Movie) => void;
}

const FilmPage = ({ filmId, onAddWatched }: Props) => {
  return <MovieDetails filmId={filmId} onAddWatched={onAddWatched} />;
};

export default FilmPage;
