import Movie from "../entities/Movie";

interface Props {
  movie: Movie;
}

const MyMovie = ({ movie }: Props) => {
  return (
    <div className=" card w-40 bg-base-300 shadow-xl relative">
      <div>
        <figure>
          <img
            className="rounded-lg h-52"
            src={movie.Poster}
            alt="Watched movie"
          />
        </figure>
        <div className="text-lg badge badge-accent absolute bottom-72 left-2 w-8 h-8">
          {movie.userRating}
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-sm">{movie.Title}</h2>
      </div>
    </div>
  );
};

export default MyMovie;
