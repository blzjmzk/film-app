import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
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
          <input
            className="input input-bordered input-sm join-item w-full sm:input-md"
            placeholder="Search for films..."
          />
          <button className="btn btn-neutral btn-sm join-item sm:btn-md">
            Search
          </button>
        </div>
        <button className="btn btn-primary btn-sm sm:btn-md">
          <NavLink to="/my-films">My films</NavLink>
        </button>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default NavBar;
