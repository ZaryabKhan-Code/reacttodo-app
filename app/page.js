"use client";
import React, { useEffect } from "react";
import Login from "@/components/Login";
import Todo from "@/components/Todo";
import { useAuth } from "@/components/authContext";
import { Suspense } from "react";
import axios from "axios";

const Page = () => {
  const { token, logout } = useAuth();

  useEffect(() => {
    const checkTokenValidity = async () => {
      // Check token validity using Axios
      try {
        if (token) {
          const response = await axios.get(
            "https://twiliotest-b82fb9f88880.herokuapp.com/verifyToken",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.data || response.status !== 200) {
            // If the token is not valid, perform logout and redirect to login
            console.log("Token is not valid. Redirecting to login...");
            logout(); // Assuming you have a logout function in your authContext
          }
        }
      } catch (error) {
        console.error("Error checking token validity:", error);
      }
    };

    checkTokenValidity();
  }, [token, logout]);

  return (
    <>
      {token ? (
        <Suspense fallback={<h2>🌀 Loading...</h2>}>
          <Todo />
        </Suspense>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Page;
