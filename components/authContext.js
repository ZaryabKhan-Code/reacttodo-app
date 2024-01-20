"use client";
import axios from "axios";
import React, { useState, useEffect, createContext, useContext } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTokenFromParams = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const urlToken = urlParams.get("token");
      window.history.replaceState({}, document.title, window.location.pathname);
      document.title = "Todo App";
      return urlToken;
    };

    const initializeToken = async () => {
      const urlToken = getTokenFromParams();

      if (urlToken) {
        setToken(urlToken);
        localStorage.setItem("token", urlToken);
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
        if (typeof window !== "undefined") {
          document.title = "Todo App";
        }
      } else {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          setToken(storedToken);
        }
      }

      setLoading(false);
    };

    initializeToken();
  }, []);

  const login = (newToken) => {
    setToken(newToken);
    if (typeof window !== "undefined") {
      localStorage.setItem("token", newToken);
    }
  };

  const logout = async () => {
    await axios.get("https://twiliotest-b82fb9f88880.herokuapp.com/logout");
    setToken("");
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  };

  if (loading) {
    return (
      <div>
        <h2>🌀 Loading...</h2>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
