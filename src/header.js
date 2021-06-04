import React from 'react';
import Button from './Button';

function Header() {
    const onClick = () => {
        console.log('hello');
    }
    return (
        <div>
            {/* <h1>Capital</h1> */}
            {/* <Button color='green' text='Start' onClick={onClick} /> */}
            <p id="display-timer">10:00</p>
        </div>
    )
}

export default Header;

