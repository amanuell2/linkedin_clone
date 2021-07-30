import React from "react";
import "./Login.css";

const LogIn = () => {
  const register = () => {};
  const login = () => {};
  return (
    <div className="login">
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" />
      <form>
        <input type="text" placeholder="Full name {required if registering}" />
        <input type="text" placeholder="Profile pic url{optional}" />
        <input type="email" placeholder="email " />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={login}>
          Sign in{" "}
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register
        </span>
      </p>
    </div>
  );
};

export default LogIn;
