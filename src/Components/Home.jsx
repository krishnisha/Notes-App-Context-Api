import React, { useState, useContext, useEffect } from "react";
import { NotesContext } from "../Context/Notecontext";
import { TaskContext } from "../Context/Taskcontext";
import { useSelectedTask } from "../Context/SelectedTaskContext"; // Provide the correct path
import task_alt from "../Assets/task_alt.svg";
import highlight from "../Assets/highlight.svg";
import highlighted from "../Assets/highlighted.svg";
import mynotes from "../Assets/mynotes.svg";
import editnotes from "../Assets/editnotes.svg";
import deletenotes from "../Assets/deletenotes.svg";

function Home() {
  const { notes } = useContext(NotesContext);
  const { tasks } = useContext(TaskContext);
  const { selectedTaskId, setSelectedTaskId } = useSelectedTask();

  return (
    <div className="home">
      <div className="profile-name">
        <h1 className="home-profile-name">Welcome John</h1>
      </div>
    <div className="notes-home">
     <div className="note-outputs-wrapper">
        <div className="notes-header">
          <img
            src={mynotes}
            alt="mynotes"
            className="my-icon"
            style={{ width: "32px", height: "32px" }}
          />
          <h1 className="notes-heading">My Notes</h1>
        </div>
       {notes.length === 0 ? (
          <div className="empty-notes-message"></div>
        ) : (
          <div className="mynotes-wrapper">
            {notes.map((note) => (
              <div className="notes-output" key={note.id}>
                <div className="notes-title">
                  <h1 className="title-note">{note.title}</h1>
                  <div className="notes-icon">
                    <button className="edit-name" onClick={() => handleEditNote(note)}>
                      <img
                        src={editnotes}
                        alt="editnotes"
                        className="my-icon"
                        style={{ width: "24px", height: "24px" }}
                      />
                    </button>
                    <button className="delete-name" onClick={() => handleDeleteNote(note.id)}>
                      <img
                        src={deletenotes}
                        alt="deletenotes"
                        className="my-icon"
                        style={{ width: "24px", height: "24px" }}
                      />
                    </button>
                  </div>
                </div>
                <div className="notes-content">
                  <p className="notes-para">{note.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
        </div>
        <div className="tasks-home">
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
      </div>
  )
}

export default Home