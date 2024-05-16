import { useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Portfolio from "./Tugas/Portfolio";
import Navbar from "./Tugas/Routing/Navbar";

export default function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      {location.pathname === "/" && (
        <div className="about container">
          <h1>Default Page</h1>
          <p>This is the Default page</p>
        </div>
      )}
      {/* {
        <nav>
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/category/makanan"}>makanan</Link>
          <Link to={"/category/minuman"}>minuman</Link>
        </nav>
      } */}
      {/* <Portfolio /> */}
      <Outlet />
    </div>
  );
}
