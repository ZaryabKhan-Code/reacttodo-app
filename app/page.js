"use client";
import React, { useEffect, useState } from "react";
import Login from "@/components/Login";
import Todo from "@/components/Todo";
import { useAuth } from "@/components/authContext";
import { Suspense } from "react";
import axios from "axios";
const Page = () => {
  const { token } = useAuth();
  const [isValidToken, setIsValidToken] = useState(true);

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
            // If the token is not valid, set isValidToken to false
            console.log("Token is not valid. Redirecting to login...");
            localStorage.removeItem("token");
            setIsValidToken(false);
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          // If the /verifyToken endpoint returns 401, set isValidToken to false
          console.log("Token verification failed. Redirecting to login...");
          localStorage.removeItem("token");
          setIsValidToken(false);
        } else {
          console.error("Error checking token validity:", error);
          localStorage.removeItem("token");
          setIsValidToken(false);
        }
      }
    };
    checkTokenValidity();
  }, [token]);

  return (
    <>
      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        {isValidToken ? <Todo /> : <Login />}
      </Suspense>
    </>
  );
};

export default Page;
