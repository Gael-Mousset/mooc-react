import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";

function User(props) {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((result) => setUser(result.data));
  }, [id]);
  return (
    <div>
      <UserProfile user={user} complete />
    </div>
  );
}

export default User;
