import React from 'react';

import "./NavBar.css";

//TODO:
// arrange the bar to mimic the 'client approved sketch'

const NavBar = (props) => {
  return(
    <div className="nav-bar-container">
      <div className="nav-bar">
        <h1 className="nav-title">Lambda Notes</h1>
        <button className="button">View Your Notes</button>
        <button className="button">+ Create New Notes</button>
      </div>
    </div>
  );
};

export default NavBar;