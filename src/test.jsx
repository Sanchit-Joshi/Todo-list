import React, { useState } from "react";
//import Card from "./cards";
import "./todolist.css";

function TodoList() {
  const [task, setTask] = useState(["go to gym", "shower", "go to work"]);
  const [newTask, setnewTask] = useState("");
  const [completedTask, setcompletedTask] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setnewTask("");
    }
  };

  const doneTask = (index) => {
    const updatedtask = task.filter((t, i) => i !== index);
    setTask(updatedtask);
    setcompletedTask((t) => [...t, task[index]]);
  };

  const deletetask = (index, source) => {
    if (source === "task") {
      const updatedtask = task.filter((t, i) => i !== index);
      setTask(updatedtask);
    } else if (source === "completedTask") {
      const updatedtask = completedTask.filter((t, i) => i !== index);
      setcompletedTask(updatedtask);
    }
  };

  const handleInputChange = (event) => {
    setnewTask(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>My Todo</h1>
        <div className="input-group mb-3 a">
          <input
            type="text"
            className="form-control"
            placeholder="Add your task..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={handleInputChange}
            value={newTask}
          />

          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>
      <section className="container">
        <h2>On-going task</h2>
        <ul>
          {task.map((t, i) => (
            <li key={i} className="tasks">
              {t}
              <div className="btngrp">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => doneTask(i)}
                >
                  <i className="bi bi-check2-circle"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => deletetask(i, "task")}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="container">
        <h2>Completed task</h2>
        <ul>
          {completedTask.map((t, i) => (
            <li key={i} className="tasks">
              {t}
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => deletetask(i, "completedTask")}
              >
                <i className="bi bi-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default TodoList;
