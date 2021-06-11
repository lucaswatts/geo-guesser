import React from 'react';

class UIElements extends React.Component {
    render() {
        return (
            <>
            <h2 id="mainTitle">Geo Quiz.</h2>
            <div id="largeBlockRight">
            <h1 id="bgTitle">GEO<br></br>QUIZ</h1>
            <div className="circle small">
            </div>  
            <div id="smallLeftBlock">
                <p id="smallLeftBlockText"></p>
            </div>
            <div id="smallRightBlock">
            
            </div>
        </div>
        </>
        )
    }
}

export default UIElements;