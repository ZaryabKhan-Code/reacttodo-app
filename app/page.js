"use client";
import React, { useEffect } from "react";
import Login from "@/components/Login";
import Todo from "@/components/Todo";
import { useAuth } from "@/components/authContext";
import { Suspense } from "react";
import axios from "axios";

const Page = () => {
  const { token } = useAuth();

  useEffect(() => {
    const checkTokenValidity = async () => {
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
            localStorage.removeItem("token");
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          // If the /verifyToken endpoint returns 401, show the login component
          console.log("Token verification failed. Redirecting to login...");

          localStorage.removeItem("token");
        } else {
          console.error("Error checking token validity:", error);
          localStorage.removeItem("token");
        }
      }
    };
    checkTokenValidity();
  }, [token]);

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
