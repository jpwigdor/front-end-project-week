import React, { Component } from 'react';
import './App.css';

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
        {/* <Nav Component here - make it so it shows on all views /> */}
        {/* <ListView Component here - contains all note cards and notes /> */}
        {/* <NewNote Component here - have note title field and note content /> */}
        {/* <ViewNote Component here - edit/delete function included /> */}
        {/* <EditNote Component here - edit/delete function included /> */}
        {/* <DeleteNote Component here - This may not need to be a component. Perhaps a JS func with a popup box? /> */}
      </div>
    );
  }
}
