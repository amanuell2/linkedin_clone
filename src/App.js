import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./app/Header";
import Sidebar from "./app/Sidebar";
import Login from "./app/Login";
import Feed from "./app/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./app/firebase";
import Widget from "./app/Widget";
import { Divider } from "@material-ui/core";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      setIsLoaded(true);
    });
  }, []);
  return (
    <div>
      {isLoaded && (
        <div className="App">
          {user ? (
            <div>
              <Header />
              <div className="app_body">
                <Sidebar />
                <Feed />
                <Widget />
              </div>
            </div>
          ) : (
            <Login />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
