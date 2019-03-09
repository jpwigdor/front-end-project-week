import React from "react";
import Note from "./Note";


class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  render() {
    return(
      <div className="note-container">
        <h1>Your Notes:</h1>
        <div className="note-card">
          {props.notes.map(note => {
            <h1 className="note-subject"
                onClick={() => props.history.push(`/${note._id}`)}
            >
              {note.title}
            </h1>
            <p> {note.textBody}</p>

/////////////////////
          })}
        </div>
      </div>
    );
  }
}

export default NoteList;