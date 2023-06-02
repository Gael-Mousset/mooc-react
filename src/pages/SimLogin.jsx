import React from "react";
import PropTypes from "prop-types";

function SimLogin({ setUser }) {
  return (
    <div>
      <button
        onClick={() => setUser("Chistophe")}
        className="btn btn-primary me-1"
      >
        Christophe
      </button>
      <button onClick={() => setUser("Valerie")} className="btn btn-primary">
        Valerie
      </button>
    </div>
  );
}
SimLogin.propTypes = {
  setUser: PropTypes.func.isRequired,
};
export default SimLogin;
