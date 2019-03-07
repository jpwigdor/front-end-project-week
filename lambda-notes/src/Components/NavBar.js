import React from 'react';

//TODO:
// arrange the bar to mimic the 'client approved sketch'

const NavBar = (props) => {
  return(
    <div className="nav-bar-container">
      <h1>Lambda Notes</h1>
      <button handleViewNotes = {this.handleViewNotes}>View Your Notes</button>
      <button>+ Create New Notes</button>
    </div>
  );
};

export default NavBar;