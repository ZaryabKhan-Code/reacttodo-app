import React from "react";
import { FaGoogle } from "react-icons/fa";
import "../static/login.css";
const Login = () => {
  return (
    <>
      <div className="card custom-card">
        <div className="card-body">
          <h5 className="card-title">Welcome to Your App</h5>
          <p className="card-text">
            Sign in to get started with amazing features!
          </p>
          <button className="btn">
            <FaGoogle className="icon" />
            Log in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
