import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div style={{display: 'flex', width: '100%', minHeight: 'auto', backgroundColor: '#BACDB0'}}>
            <h2 to='/' style={{width: '60%', textAlign: 'left', padding: '0 0.8em', fontSize: '2.1em', fontWeight: 'bold'}}>NBA Fantasy App</h2>
            <div style={{display: 'flex', justifyContent: 'space-around', width: '40%'}}>
                <Link to='/teams' style={{textAlign: 'center', fontSize: '1.3em', alignSelf: 'center', textDecoration: 'none', color: '#475B63'}}>Teams</Link>
                <Link to='/build' style={{textAlign: 'center', fontSize: '1.3em', alignSelf: 'center', textDecoration: 'none', color: '#475B63'}}>Build a Team</Link>
            </div>
        </div>
    );
};

export default NavBar;