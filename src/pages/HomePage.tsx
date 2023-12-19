import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt1375666",
    Title: "Inception2",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt1375666",
    Title: "Inception3",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt1375666",
    Title: "Inception4",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
];

const HomePage = () => {
  return (
    <>
      <h2 className="text-center mt-2 mb-4">
        Found {tempMovieData.length} results
      </h2>
      <div className="flex flex-col items-center ">
        {tempMovieData.map((movie) => (
          <Link to={/films/ + movie.Title}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
