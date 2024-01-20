import React from "react";

const TodoTableSkeleton = () => {
  // Define the number of skeleton items you want to show
  const skeletonItems = Array.from({ length: 3 }); // You can adjust the number as needed

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
          {skeletonItems.map((_, index) => (
            <tr className="user_record_tr" key={index}>
              <td className="align-middle">
                <div className="d-flex align-items-center">
                  <div
                    className="avatar mr-2"
                    style={{
                      height: "auto",
                      width: 45,
                      backgroundColor: "#ccc",
                    }}
                  />
                  <span className="ms-2 mt-1">Loading...</span>
                </div>
              </td>
              <td className="align-middle task">Loading...</td>
              <td className="align-middle">
                <span className="badge bg-secondary mb-1">Loading...</span>
              </td>
              <td className="align-middle">
                <div className="icon" style={{ backgroundColor: "#ccc" }} />
                <div className="icon" style={{ backgroundColor: "#ccc" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTableSkeleton;
