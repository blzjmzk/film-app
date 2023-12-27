import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import Search from "./Search";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const NavBar = ({ query, setQuery }: Props) => {
  return (
    <>
      <NavLink
        className="flex justify-center mt-4 text-xl font-bold sm:hidden"
        to="/"
      >
        Film App
      </NavLink>
      <div className="navbar flex items-center px-5 sm:mt-4 mx-auto sm:max-w-6xl">
        <div className="hidden sm:block">
          <NavLink className="text-xl font-bold" to="/">
            Film App
          </NavLink>
        </div>
        <div className="join flex-1 mx-2 lg:ml-36">
          <Search query={query} setQuery={setQuery} />
        </div>
        <button className="btn btn-primary btn-sm mx-2 sm:btn-md">
          <NavLink to="/my-films">My Movies</NavLink>
        </button>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default NavBar;
