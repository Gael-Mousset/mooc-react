import PropTypes from "prop-types";
import logo from "../logo.svg";

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link active" aria-current="page" href="#">
                Home
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                Link
              </div>
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
