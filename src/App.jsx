import React, { useCallback, useState } from "react";
// import Counter from "./components/Counter";
import Header from "./components/Header";
import UserList from "./pages/UserList";

function App() {
  const [user, setUser] = useState("");

  const setUserChistophe = useCallback(() => {
    setUser("Chishophe");
  }, []);

  const setUserValerie = useCallback(() => {
    setUser("Valerie");
  }, []);
  return (
    <div>
      <Header user={user} />
      <div className="p-3">
        <button onClick={setUserChistophe}>Christophe</button>
        <button onClick={setUserValerie}>Valerie</button>

        {/* <Counter /> */}
        <UserList />
      </div>
    </div>
  );
}

export default App;
