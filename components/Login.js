import React, { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import "../static/login.css";
import { useAuth } from "./authContext";

const Login = () => {
  const { token, login } = useAuth();

  // Check if the token is present on component mount
  useEffect(() => {
    if (token) {
      // Token is present, redirect away
      window.location.href = "https://twiliotest-b82fb9f88880.herokuapp.com/"; // Redirect to home or another route
    }
  }, [token]);

  const handleGoogleLogin = async () => {
    try {
      // Redirect to the Google authentication page
      window.location.href =
        "https://twiliotest-b82fb9f88880.herokuapp.com/auth/google";
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <>
      <div className="card custom-card">
        <div className="card-body">
          <h5 className="card-title">Welcome to Your App</h5>
          <p className="card-text">
            Sign in to get started with amazing features!
          </p>
          <button className="btn" onClick={handleGoogleLogin}>
            <FaGoogle className="icon" />
            Log in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
