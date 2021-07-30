import React from "react";
import "./App.css";
import Header from "./app/Header";
import Sidebar from "./app/Sidebar";
import Login from "./app/Login";
import Feed from "./app/Feed";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      )}

      {/* app bar */}
      {/* sidebar */}
      {/* feed */}
      {/* widget */}
    </div>
  );
}

export default App;
