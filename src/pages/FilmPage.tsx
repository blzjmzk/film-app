import MovieDetails from "../components/MovieDetails";
import Movie from "../entities/Movie";

interface Props {
  filmId: string;
  watched: Movie[];

  onAddWatched: (movie: Movie) => void;
}

const FilmPage = ({ watched, filmId, onAddWatched }: Props) => {
  return (
    <MovieDetails
      watched={watched}
      filmId={filmId}
      onAddWatched={onAddWatched}
    />
  );
};

export default FilmPage;
