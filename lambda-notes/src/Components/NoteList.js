import React from "react";
import Note from "./Note";


class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        {this.props.notes.map(note => <Note note={note} key={note.id} />)}
      </div>
    )
  }
}

export default NoteList;