import Movie from "../entities/Movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <>
      <div className="card card-side bg-neutral shadow-xl my-4 transform sm:w-96 hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out">
        <figure>
          <img
            src={movie.Poster}
            alt="Movie"
            className="w-full h-56 object-cover"
          />
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
