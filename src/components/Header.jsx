import PropTypes from "prop-types";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const login = props.user ? (
    <span>Bienvenue {props.user} !</span>
  ) : (
    <span>Connecter-vous !</span>
  );

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top mt-1"
            />
            MOOC React
          </div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/counter" className="nav-link">
                Coumpteur
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
          <div className="navbar-text">{login}</div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.string,
};

export default Header;
