import { useEffect, useState } from "react";
import Movie from "../entities/Movie";
import StarRating from "./StarRating";
import MovieDetailsSkeletons from "./MovieDetailsSkeletons";

const KEY = "93104c0d";

interface Props {
  filmId: string;
  onAddWatched: (movie: Movie) => void;
}

const MovieDetails = ({ filmId, onAddWatched }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState<number>();

  const handleAdd = (rating: number) => {
    setUserRating(rating);
    console.log(userRating);

    const newWatchedMovie = {
      imdbID: filmId,
      Title: movie?.Title || "",
      userRating: rating,
      Poster: movie?.Poster || "",
    };

    onAddWatched(newWatchedMovie);
  };

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${filmId}`
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
      {isLoading ? (
        <MovieDetailsSkeletons />
      ) : (
        <>
          <div className="flex flex-col items-center mx-auto max-w-4xl p-7">
            <div>
              <div className="flex flex-row">
                <div>
                  <img className="rounded-lg" src={movie?.Poster} alt="Movie" />
                </div>
                <div className="flex flex-col gap-2 pl-6">
                  <p className="text-xl font-bold mb-5">{movie?.Title}</p>
                  <div className="flex flex-row gap-2">
                    <div className="badge badge-outline">Year</div>
                    <div className="">{movie?.Year}</div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="badge badge-outline">Genre</div>
                    <div className="">{movie?.Genre}</div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="badge badge-outline">Director</div>
                    <div className="">{movie?.Director}</div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="badge badge-outline">IMDB Rating</div>
                    <div className="">{movie?.imdbRating}</div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="badge badge-outline">Runtime</div>
                    <div className="">{movie?.Runtime}</div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div>{movie?.Plot}</div>
                <div className="flex flex-row gap-3 mt-3">
                  <div>Your Rating:</div>
                  <StarRating onSetRating={handleAdd} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
