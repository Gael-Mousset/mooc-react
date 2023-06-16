import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { useCallback, useContext } from "react";
import classnames from "classnames";

function Header() {
  const { context, dispatch } = useContext(Context);
  const switchTheme = useCallback(() => {
    dispatch({ type: "switchTheme" });
  }, [dispatch]);
  return (
    <div>
      <nav
        className={classnames(
          "navbar navbar-expand-md",
          context.theme === "light"
            ? "navbar-dark bg-dark"
            : "navbar-light bg-secondary"
        )}
      >
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
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link to="/roles" className="nav-link">
                Roles
              </Link>
            </li>
          </ul>
          <div className="navbar-text me-3">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                role="switch"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onChange={switchTheme}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {context.theme}
              </label>
            </div>
          </div>
          <div className="navbar-text text-center">
            {context.user.name ? (
              <div> Bienvenue {context.user.name}</div>
            ) : (
              <div>
                <Link to="/login" className="nav-link">
                  Connectez-vous !
                </Link>
                ou
                <Link to="/register" className="nav-link">
                  Inscrivez-vous !
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
