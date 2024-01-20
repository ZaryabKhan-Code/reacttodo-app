"use client";
// page.js
import React, { useEffect } from "react";
import Login from "@/components/Login";
import Todo from "@/components/Todo";
import { useAuth } from "@/components/authContext";
import { Suspense } from "react";

const Page = () => {
  const { token } = useAuth();

  useEffect(() => {
    // Perform any side effects when the token changes
    if (token) {
      // Fetch user data or perform other actions
      console.log("Token is present. Fetching user data...");
    } else {
      // Token is not present, you may want to redirect or perform other actions
      console.log("Token is not present. Redirecting to login...");
    }
  }, [token]); // Only re-run the effect if the token changes

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
