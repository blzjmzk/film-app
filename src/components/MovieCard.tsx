import Movie from "../entities/Movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <>
      <div
        id={movie.imdbID}
        className="card card-side bg-neutral shadow-xl w-96 my-4 transform hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
      >
        <figure className="w-40">
          <img src={movie.Poster} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-neutral-content">
            {movie.Title} ({movie.Year})
          </h2>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
