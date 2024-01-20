"use client";
import React, { Suspense, useEffect, useState } from "react";
import "../static/todo.css";
import { FaCheck, FaTrash } from "react-icons/fa";

const TodoTable = ({ users }) => {
  return (
    <div className="container mt-3 custom-table">
      <table className="table">
        <thead>
          <tr>
            <th>Team Member</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <Suspense fallback={<h2>Loading...</h2>}>
          <tbody>
            {users.map((user, index) => (
              <tr className="user_record_tr" key={index}>
                <td className="align-middle">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="avatar mr-2"
                      style={{ height: "auto", width: 45 }}
                    />
                    <span className="ms-2 mt-1">{user.assign_to}</span>
                  </div>
                </td>
                <td className="align-middle task">{user.task}</td>
                <td className="align-middle">
                  <span className={`badge bg-${user.PriorityColor} mb-1`}>
                    {user.priority}
                  </span>
                </td>
                <td className="align-middle">
                  <FaCheck className="icon" title="Complete" />
                  <FaTrash className="icon" title="Delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </Suspense>
      </table>
    </div>
  );
};

export default TodoTable;
