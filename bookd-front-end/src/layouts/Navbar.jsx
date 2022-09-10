import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Bookdtransparent.png";
import classes from "./Navbar.module.css";

function NavBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.logo__image} src={logo} alt="Bookd Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/filter">Favourites</Link>
          </li>
          <li>
            <Link to="/new-meetup">Bookings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
