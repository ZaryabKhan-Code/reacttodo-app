import React from "react";
import "../static/todo.css";
import { FaCheck, FaTrash } from "react-icons/fa";
const TodoTable = () => {
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
        <tbody>
          <tr className="user_record_tr">
            <td className="align-middle">
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" // Add the correct path for the avatar image
                  alt="Avatar"
                  className="avatar mr-2"
                  style={{ height: "auto", width: 45 }}
                />
                <span className="ms-2 mt-1">Danny McChain</span>
              </div>
            </td>
            <td className="align-middle task">Call Sam for payments</td>
            <td className="align-middle">
              <span className="badge bg-danger mb-1">High priority</span>
            </td>
            <td className="align-middle">
              <FaCheck className="icon" title="Complete" />
              <FaTrash className="icon" title="Delete" />
            </td>
          </tr>
          <tr className="user_record_tr">
            <td className="align-middle">
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" // Add the correct path for the avatar image
                  alt="Avatar"
                  className="avatar mr-2"
                  style={{ height: "auto", width: 45 }}
                />
                <span className="ms-2 mt-1">Kate Moss</span>
              </div>
            </td>
            <td className="align-middle task">Make payment to Bluedart</td>
            <td className="align-middle">
              <span className="badge bg-primary mb-1">Low priority</span>
            </td>
            <td className="align-middle">
              <FaCheck className="icon" title="Complete" />
              <FaTrash className="icon" title="Delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
