import React, { useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function UserProfile(props) {
  const hendleDelete = useCallback(
    (event) => {
      event.stopPropagation();
      axios.delete(
        "https://jsonplaceholder.typicode.com/users/" + props.user.id
      );
      props.deleteUser(props.user.id);
    },
    [props]
  );
  return (
    <div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.user.name}</h5>
          <div>Email : {props.user.email}</div>
          {props.complete && (
            <div>
              <div>
                Adresse : {props.user.address?.suite}{" "}
                {props.user.address?.street} {props.user.address?.city}
              </div>
              <div> Téléphone: {props.user.phone}</div>
              <div>Side web : {props.user.website}</div>
              <div>Entreprise : {props.user.company?.name}</div>
            </div>
          )}
          {props.deleteUser && (
            <div className="d-flex justify-content-end">
              <button className="btn btn-danger" onClick={hendleDelete}>
                <i className="bi bi-trash3"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func,
  complete: PropTypes.bool,
};

export default UserProfile;
