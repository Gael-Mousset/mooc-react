import React from "react";
import PropTypes from "prop-types";

function UserProfile(props) {
  return (
    <div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.user}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.string,
};

export default UserProfile;
