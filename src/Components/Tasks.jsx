import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../Context/Taskcontext";
import Profile from "../Assets/Profile.svg";
import task_alt from "../Assets/task_alt.svg";
import highlight from "../Assets/highlight.svg";
import highlighted from "../Assets/highlighted.svg";

function Tasks() {
  const { tasks, addTask, deleteTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState({ title: "" });
  const [selectedTaskId, setSelectedTaskId] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Clear the error message when the input changes
    setErrorMessage("");
  }, [newTask.title]);
  const handleToggleTask = (taskId) => {
    if (selectedTaskId.includes(taskId)) {
      // If taskId is in selectedTaskId, remove it
      setSelectedTaskId(selectedTaskId.filter(id => id !== taskId));
    } else {
      // If taskId is not in selectedTaskId, add it
      setSelectedTaskId([...selectedTaskId, taskId]);
    }
  };
  const handleAddTask = () => {
    // Check if the title is not empty
    if (newTask.title.trim() === "") {
      setErrorMessage("Title is required.");
    } else {
      setErrorMessage(""); // Clear any previous error message
      addTask({ ...newTask, id: Date.now() });
      setNewTask({ title: "" });
    }
  };

  const handleDeleteTask = (taskId) => {
    setSelectedTaskId(null);
  };

  return (
    <div className="tasks-container">
      <div className="task-input">
        <div className="task-wrapper">
          <div className="task-header">
            <h1 className="task-heading">Add a Task</h1>
            <img
              src={Profile}
              alt="User Avatar"
              className="userprofile-icon"
              style={{ width: "64px", height: "64px" }}
            />
          </div>
          <input
            className="tasks-title-input"
            type="text"
            placeholder="task title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button className="addnote-btn" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
      <div className="task-outputs-wrapper">
        <div className="tasks-header">
          <img
            src={task_alt}
            alt="task_alt"
            className="my-icon"
            style={{ width: "32px", height: "32px" }}
          />
          <h1 className="tasks-heading">My Tasks</h1>
        </div>
        <div className="task-list-wrapper">
        {/* Display existing tasks */}
        {tasks.length > 0 && (
          <div className="task-list">
            {tasks.map((task) => (
              <div className="task-item" key={task.id}>
                <label className="task-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedTaskId.includes(task.id)}
                    onChange={() => handleToggleTask(task.id)}
                  />
                  {task.title}
                  {selectedTaskId.includes(task.id) && (
                    <div className="tick-mark">&#10003;</div>
                  )}
                </label>
                {selectedTaskId.includes(task.id) ? (
                  <img
                    src={highlight}
                    alt="highlight"
                    className="my-icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                ) : (
                  <img
                    src={highlighted}
                    alt="highlighted"
                    className="my-icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      </div>
    </div>
  );
}

export default Tasks;
