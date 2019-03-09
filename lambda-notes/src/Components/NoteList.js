import React from "react";
import Note from "./Note";


const NoteList = (props) => {
  return(
    <div className="note-container">
      <h1>Your Notes:</h1>
      {props.notes === null} ? 
        Notes Are Loading
        : {props.notes.map(note => (
          <div key={note._id} className="note-card">
            <Note note={props.note}/>
          </div>
          ))} 
    </div>
  );
}

export default NoteList;