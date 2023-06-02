import React, { useCallback, useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";

function UserList(props) {
  const users = ["Eva", "Aude", "Anne", "Marc", "Dorian"];

  const [criteria, setCriteria] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handlSearch = useCallback((event) => {
    setCriteria(event.target.value);
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.toLowerCase().includes(criteria.toLowerCase())
      )
    );
  }, [criteria]);

  return (
    <div>
      <h1>Liste des utilisateur</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Recherche"
        onChange={handlSearch}
      />
      <div className="container ">
        <div className="row mt-3">
          {filteredUsers.map((user, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-xs-6 mb-3">
              <UserProfile user={user} />
            </div>
          ))}
          <div className="col-lg-3 col-md-4 col-xs-6 mb-3 d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
