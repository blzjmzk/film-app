import Movie from "../entities/Movie";
import Star from "./Star";

interface Props {
  movie: Movie;
}

const MyMovie = ({ movie }: Props) => {
  return (
    <div className="card bg-base-300 p-2 shadow-xl">
      <figure className="relative">
        <img className="h-52" src={movie.Poster} alt="Watched movie" />
        <div className="absolute bottom-[160px] left-[3px]">
          <Star number={movie.userRating} />
        </div>
      </figure>
      <div className="card-body max-w-[140px]">
        <h2 className="card-title text-sm text-center">{movie.Title}</h2>
      </div>
    </div>
  );
};

export default MyMovie;
