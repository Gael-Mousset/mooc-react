import React, { useContext, useState } from "react";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import UserList from "./pages/UserList";
import SimLogin from "./pages/SimLogin";
import { Route, Routes } from "react-router";
import Roles from "./pages/Roles";
import Register from "./pages/Register2";
import Page404 from "./pages/Page404";
import Post from "./pages/Post";
import User from "./pages/User";
import classnames from "classnames";
import { Context } from "./context";
function App() {
  const [user, setUser] = useState("");
  const { context } = useContext(Context);

  return (
    <div
      className={classnames("min-vh-100 bg-" + context.theme, {
        "text-light": context.theme === "dark",
      })}
    >
      <Header user={user} />
      <div className="p-3">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<SimLogin setUser={setUser} />} />
          <Route path="/roles" element={<Roles setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
