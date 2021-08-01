import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
const LogIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setprofilePicture] = useState("");
  const dispatch = useDispatch();
  const register = () => {
    if (!name) {
      return alert("please enter your full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            photoURL: profilePicture,
            displayName: name,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoURL: userAuth.profilePicture,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };
  const loginOfApp = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("email or password can not be empty");
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.profilePicture,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
        alt="likedin logo"
      />
      <form>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name {required if registering}"
        />
        <input
          type="text"
          placeholder="Profile pic url{optional}"
          onChange={(e) => setprofilePicture(e.target.value)}
        />
        <input
          type="email"
          placeholder="email "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" onClick={loginOfApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default LogIn;
