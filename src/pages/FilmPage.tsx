interface Props {
  filmId: string;
}

const FilmPage = ({ filmId }: Props) => {
  return <div>FilmPage of film {filmId} </div>;
};

export default FilmPage;
