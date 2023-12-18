import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar flex mt-4 ">
      <div className="join">
        <NavLink className="btn btn-ghost text-xl" to="/">
          Film App
        </NavLink>
      </div>
      <div className="join flex-1 mx-2 lg:mx-20">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Search for films..."
        />
        <button className="btn btn-neutral join-item">Search</button>
      </div>
      <button className="btn btn-primary mr-5">
        <NavLink to="/my-films">My films</NavLink>
      </button>
      <label className="flex cursor-pointer gap-2 mr-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>

        <input
          type="checkbox"
          value="emerald"
          className="toggle theme-controller"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      </label>
    </div>
  );
};

export default NavBar;
