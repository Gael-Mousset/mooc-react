import React, { useCallback, useEffect, useState } from "react";

function UserList(props) {
  const users = ["Eva", "Aude", "Anne", "Marc"];

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
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
