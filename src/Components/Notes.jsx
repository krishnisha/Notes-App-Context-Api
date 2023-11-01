import React, { useState, useContext, useEffect } from "react";
import { NotesContext } from "../Context/Notecontext";
import Profile from "../Assets/Profile.svg";
import format from "../Assets/format.svg";
import formatcolor from "../Assets/formatcolor.svg";
import formatleft from "../Assets/formatleft.svg";
import formatsize from "../Assets/formatsize.svg";
import formattext from "../Assets/formattext.svg";
import undo from "../Assets/undo.svg";
import redo from "../Assets/redo.svg";
import mynotes from "../Assets/mynotes.svg";
import editnotes from "../Assets/editnotes.svg";
import deletenotes from "../Assets/deletenotes.svg";

function Notes() {
  const { notes, addNote, updateNote, deleteNote } = useContext(NotesContext);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Clear the error message when the input changes
    setErrorMessage("");
  }, [newNote.title, newNote.content]);

  const handleAddNote = () => {
    // Check if both title and content are not empty
    if (newNote.title.trim() === "" || newNote.content.trim() === "") {
      setErrorMessage("Both title and content are required.");
    } else {
      setErrorMessage(""); // Clear any previous error message
      if (editingNoteId !== null) {
        updateNote({ ...newNote, id: editingNoteId });
        setEditingNoteId(null);
      } else {
        addNote({ ...newNote, id: Date.now() });
      }

      setNewNote({ title: "", content: "" });
    }
  };

  const handleEditNote = (note) => {
    setNewNote(note);
    setEditingNoteId(note.id);
  };

  const handleDeleteNote = (noteId) => {
    deleteNote(noteId);
    if (editingNoteId === noteId) {
      // Reset editing state if the currently edited note is deleted
      setEditingNoteId(null);
      setNewNote({ title: "", content: "" });
    }
  };

  return (
    <>
      <div className="note-input">
        <div className="note-wrapper">
          <div className="note-header">
            <h1 className="note-heading">Add a Note</h1>
            <img
              src={Profile}
              alt="User Avatar"
              className="userprofile-icon"
              style={{ width: "64px", height: "64px" }}
            />
          </div>
          <input
            className="notes-title-input"
            type="text"
            placeholder="Title"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          />
          <textarea
            className="notes-textarea"
            placeholder="Take a note..."
            value={newNote.content}
            onChange={(e) =>
              setNewNote({ ...newNote, content: e.target.value })
            }
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button className="addnote-btn" onClick={handleAddNote}>
            {editingNoteId !== null ? "Update Note" : "Add Note"}
          </button>
          <div className="text-editor-icons">
            <img
              src={formatsize}
              alt="format"
              className="text-editor-icon"
              style={{ width: "32px", height: "32px" }}
            />
            <img
              src={formatcolor}
              alt="formatcolor"
              className="text-editor-icon"
              style={{ width: "32px", height: "32px" }}
            />
            <img
              src={format}
              alt="format"
              className="text-editor-icon"
              style={{ width: "32px", height: "32px" }}
            />
            <img
              src={formattext}
              alt="formattext"
              className="text-editor-icon"
              style={{ width: "32px", height: "32px" }}
            />
            <img
              src={formatleft}
              alt="formatleft"
              className="text-editor-icon"
              style={{ width: "32px", height: "32px" }}
            />
            <img
              src={undo}
              alt="undo"
              className="text-editor-icon"
              style={{ width: "32px", height: "32px" }}
            />
            <img
              src={redo}
              alt="redo"
              className="text-editor-icon"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
        </div>
      </div>
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
        <p className="recently-viewed">Recently viewed</p>
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
    </>
  );
}

export default Notes;
