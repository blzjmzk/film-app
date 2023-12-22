import MovieDetails from "../components/MovieDetails";

interface Props {
  filmId: string;
}

const FilmPage = ({ filmId }: Props) => {
  return <MovieDetails filmId={filmId} />;
};

export default FilmPage;
