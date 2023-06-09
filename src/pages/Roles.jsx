import React, { useCallback, useEffect, useState } from "react";

const roles = [
  "Utilisateurs",
  "Administrateurs",
  "Modérateurs",
  "Comptable",
  "Directeur",
  "Secrétaire",
];

function Roles(props) {
  const [criteria, setCriteria] = useState("");
  const handleChange = useCallback((event) => {
    setCriteria(event.target.value);
  }, []);

  const [rolesFiltered, setRolesFiltered] = useState([]);
  useEffect(() => {
    setRolesFiltered(
      roles.filter((role) =>
        role.toLowerCase().includes(criteria.toLowerCase())
      )
    );
  }, [criteria]);
  return (
    <div>
      <input
        type="text"
        placeholder="Recherche"
        value={criteria}
        onChange={handleChange}
      />
      <br />
      {rolesFiltered.length
        ? rolesFiltered.map((roles, index) => <li key={index}>{roles}</li>)
        : "Aucune correspondance à ce critère de recherche"}
    </div>
  );
}

export default Roles;