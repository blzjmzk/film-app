import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const Layout = ({ query, setQuery }: Props) => {
  return (
    <>
      <NavBar query={query} setQuery={setQuery} />
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
