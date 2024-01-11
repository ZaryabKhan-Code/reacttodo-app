"use client";
import Login from "@/components/Login";
import Todo from "@/components/Todo";
import React from "react";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      {/* <Login /> */}
      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <Todo />
      </Suspense>
    </>
  );
};

export default page;
