"use client";
import React, { Suspense, useEffect, useState } from "react";
import TodoTable from "./TodoTable";
import TodoTableSkeleton from "./TodoTableSkeleton";
import { useAuth } from "./authContext";
import axios from "axios";

const Todo = () => {
  const { token } = useAuth();
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [taskMember, setTaskMember] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    // Fetch tasks when the component mounts
    fetchTasks();
  }, [token]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://twiliotest-b82fb9f88880.herokuapp.com/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(token);
      setTodos(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();

    if (task.trim() !== "" && taskMember.trim() !== "" && priority !== "") {
      try {
        await axios.post(
          "https://twiliotest-b82fb9f88880.herokuapp.com/tasks",
          {
            task,
            assign_to: taskMember,
            priority,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Fetch updated tasks after adding a new task
        fetchTasks();
        setTask("");
        setTaskMember("");
        setPriority("");
      } catch (error) {
        console.error("Error adding task:", error.message);
      }
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Todo App</h2>
        <form onSubmit={addTodo} className="row g-3">
          <div className="col-md-4">
            <label htmlFor="task" className="form-label">
              Task
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="task"
              placeholder="Enter a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="taskMember" className="form-label">
              Task Member
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="taskMember"
              placeholder="Enter task member"
              value={taskMember}
              onChange={(e) => setTaskMember(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="priority" className="form-label">
              Priority
            </label>
            <select
              className="form-select form-select-sm"
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="" disabled>
                Select priority
              </option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="col-md-12 mb-3">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
        <TodoTable users={todos} />
    </>
  );
};

export default Todo;
