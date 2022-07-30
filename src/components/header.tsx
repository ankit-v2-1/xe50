import React, { Fragment } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

let Header = () => {
    return (<Fragment>
        <div className='logo'>
            <img src={logo} alt="logo" width="220" height="200" />

        </div>

    </Fragment>);
}


export default Header;