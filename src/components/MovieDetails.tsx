import { useEffect, useState } from "react";
import Movie from "../entities/Movie";
import StarRating from "./StarRating";

const KEY = "93104c0d";

interface Props {
  filmId: string;
}

const MovieDetails = ({ filmId }: Props) => {
  const [movie, setMovie] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${filmId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [filmId]
  );

  return (
    <>
      <div className="flex flex-col items-center ">
        <div>
          <div className="flex flex-row">
            <div>
              <img className="" src={movie.Poster} alt="Movie" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">{movie.Title}</p>
              <div className="flex flex-row gap-2">
                <div className="badge badge-outline">Year</div>
                <div className="">{movie.Year}</div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="badge badge-outline">Genre</div>
                <div className="">{movie.Genre}</div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="badge badge-outline">Director</div>
                <div className="">{movie.Director}</div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="badge badge-outline">IMDB Rating</div>
                <div className="">{movie.imdbRating}</div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="badge badge-outline">Runtime</div>
                <div className="">{movie.Runtime}</div>
              </div>
            </div>
          </div>
          <div>
            <div>{movie.Plot}</div>
            <div className="flex flex-row gap-3">
              <div>Your Rating:</div>
              <StarRating />
            </div>
            <button className="btn btn-active btn-accent">
              Add to My Films
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

// Director: string;
// Genre: string;
// imdbID: string;
// imdbRating: string;
// Plot: string;
// Poster: string;
// Released: string;
// Runtime: string;
// Title: string;
// Year: string;
