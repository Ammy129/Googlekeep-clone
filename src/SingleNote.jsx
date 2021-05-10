import React from "react";
import "./css/SingleNote.css";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const SingleNote = ({ id, title, text, deleteNote }) => {
  return (
    <article className="note">
      <p className="note-title">{title}</p>
      <p className="note-text">{text}</p>
      <div className="del" onClick={() => deleteNote(id)}>
        <DeleteOutlinedIcon />
      </div>
    </article>
  );
};

export default SingleNote;
