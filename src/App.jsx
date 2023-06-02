import React, { useCallback, useState } from "react";
// import Counter from "./components/Counter";
import Header from "./components/Header";
import UserList from "./pages/UserList";
import SimLogin from "./components/SimLogin";

function App() {
  const [user, setUser] = useState("");

  return (
    <div>
      <Header user={user} />
      <div className="p-3">
        <SimLogin setUser={setUser} />
        {/* <Counter /> */}
        <UserList />
      </div>
    </div>
  );
}

export default App;
