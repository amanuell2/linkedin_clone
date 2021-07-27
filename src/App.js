import React from "react";
import "./App.css";
import Header from "./app/Header";
import Sidebar from "./app/Sidebar";
import Feed from "./app/Feed";
function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
      {/* app bar */}
      {/* sidebar */}
      {/* feed */}
      {/* widget */}
    </div>
  );
}

export default App;
