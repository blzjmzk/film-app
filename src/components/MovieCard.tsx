import Movie from "../entities/Movie";

interface Props {
  movie: Movie;
  onSelectMovie: (id: string) => void;
}

const MovieCard = ({ movie, onSelectMovie }: Props) => {
  return (
    <>
      <div
        onClick={() => onSelectMovie(movie.imdbID!)}
        className="card card-side p-3 bg-neutral shadow-xl my-4 transform sm:w-96 hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
      >
        <div className="max-w-[150px]">
          <figure className="h-full w-full object-cover">
            <img src={movie.Poster} alt="Movie" />
          </figure>
        </div>
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
