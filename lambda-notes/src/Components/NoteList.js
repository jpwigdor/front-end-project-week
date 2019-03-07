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
      <div className="App">
        <h1>Notes</h1>
        <div className="NotesList">
          {this.state.notes.map(note => {
            return(
              <div key={note._id}>
              <div>{note.title}</div>
              <div>{note.textBody}</div>
            </div>
            ) 
          })}
        </div>
      </div>
    );
  }
}

export default NoteList;