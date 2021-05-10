import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "./css/Notes.css";
import SingleNote from "./SingleNote";

const Notes = () => {
  //getting back from localStorage
  const getNotes = () => {
    return localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];
  };

  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState({
    title: "",
    text: "",
  });
  const [noteList, setNoteList] = useState(getNotes());

  //Local Storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteList));
  }, [noteList]);

  const toggleInput = e => {
    const target = e.target.classList;
    if (target.contains("notes-textarea")) setShowInput(true);
    else if (target.contains("close")) setShowInput(false);
  };

  //On submit
  const submitted = e => {
    e.preventDefault();
    if (value.text || value.title) {
      const id = new Date().getTime().toString();
      const newNote = { ...value, id };

      setNoteList(prev => [newNote, ...prev]);

      setValue({
        title: "",
        text: "",
      });
    }
  };

  // deleting a note
  const deleteNote = id => {
    setNoteList(prev => prev.filter(note => note.id !== id));
  };

  return (
    <section className="notes">
      <header className="notes-header">
        <form
          className="notes-form"
          style={{ paddingBottom: `${showInput ? "2rem" : 0}` }}
          onSubmit={submitted}
        >
          {showInput && (
            <input
              type="text"
              value={value.title}
              onChange={e =>
                setValue(prev => ({ ...prev, title: e.target.value }))
              }
              placeholder="Title"
            />
          )}
          <textarea
            placeholder="Take a note..."
            className="notes-textarea"
            onClick={toggleInput}
            value={value.text}
            onChange={e =>
              setValue(prev => ({ ...prev, text: e.target.value }))
            }
          ></textarea>
          {showInput && (
            <>
              <button type="submit">
                <AddIcon />
              </button>

              <p className="close" onClick={toggleInput}>
                close
              </p>
            </>
          )}
        </form>
      </header>
      <div className="notes-wrapper">
        {noteList.map(note => (
          <SingleNote key={note.id} {...note} deleteNote={deleteNote} />
        ))}
      </div>
    </section>
  );
};

export default Notes;
