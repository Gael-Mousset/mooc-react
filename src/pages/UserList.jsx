import React from "react";

function UserList(props) {
  const users = ["Eva", "Aude", "Anne", "Marc"];

  return (
    <div>
      <h1>Liste des utilisateur</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
