import MyMovie from "../components/MyMovie";
import Movie from "../entities/Movie";

interface Props {
  watched: Movie[];
}

const UserFilms = ({ watched }: Props) => {
  return (
    <>
      <div className="flex flex-row flex-wrap max-w-[900px] gap-5 p-10 mx-auto justify-center">
        {watched.map((movie) => (
          <MyMovie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default UserFilms;
