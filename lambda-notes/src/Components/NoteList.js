import React from "react";
import Note from "./Note";


function NoteList(props) {
  return(
    <div className="note-container">
      <h1>Your Notes:</h1>
        {props.notes.map(note => (
          <div key={note._id} className="note-card">
            <h1 className="note-subject" onClick={() => props.history.push(`/${note._id}`)}>
              {note.title}
            </h1>
            <p> 
              {note.textBody}
            </p>
          </div>
        ))}
    </div>
  );
}

export default NoteList;