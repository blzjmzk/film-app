import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NavLink className="btn btn-ghost text-xl" to="/">
          Film App
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/my-films">My films</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
