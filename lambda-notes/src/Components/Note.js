import React from "react";


const Note = (props) => {
  const note = props.notes ? props.notes.find(note=>`${note.id}` === props.match.params.id):props.note;

  return(
    <div>
      <h3>{note.title}</h3>
      <p>{note.textBody}</p>
    </div>
  )
}

export default Note;