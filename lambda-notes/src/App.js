import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from "./Components/NavBar";

import './App.css';
import { notEqual } from 'assert';

//TODO: 
/* 
  -Pull the API data
  -Display it on a note
  -Map out the notes to display all notes
  -Make each note clickable and load the Edit Note page
  -Create edit note functionality for Title and Body
  -Push those changes to the server for storage
  -Create Delete Note funtionality, removing the ID from the server via a modal
  -Create a New Note functionality
*/

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ""
    };
  }


  render() {
    return (
      <div className="app">
        <Route path="/" render={ (props) => {return(<NavBar {...props}/>)}} />
        {/* <Nav Component here - make it so it shows on all views /> */}
        {/* <NoteList Component here - contains all note cards and notes /> */}
        {/* <NewNote Component here - have note title field and note content /> */}
        {/* <ViewNote Component here - edit/delete function included /> */}
        {/* <EditNote Component here - edit/delete function included /> */}
        {/* <DeleteNote Component here - This may not need to be a component. Perhaps a JS func with a popup box? /> */}
      </div>
    );
  }
}
