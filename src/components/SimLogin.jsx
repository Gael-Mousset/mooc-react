import React from "react";
import PropTypes from "prop-types";

function SimLogin({ setUser }) {
  return (
    <div>
      <button onClick={() => setUser("Chistophe")}>Christophe</button>
      <button onClick={() => setUser("Valerie")}>Valerie</button>
    </div>
  );
}
SimLogin.propTypes = {
  setUser: PropTypes.func.isRequired,
};
export default SimLogin;
