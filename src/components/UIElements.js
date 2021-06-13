import React from "react";

class UIElements extends React.Component {
  render() {
    return (
      <div id="background">

<div class="home-section" id="home">
        <div class="home-content">
        
        <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>

        </div>
        </div>


        <h2 id="mainTitle">Geo Quiz.</h2>
        <div id="largeBlockRight">
          <div className="circle small"></div>
          <div id="smallLeftBlock">
            <p id="smallLeftBlockText"></p>
          </div>
          <div id="smallRightBlock"></div>
        </div>
      </div>
    );
  }
}

export default UIElements;
