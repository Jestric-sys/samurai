import React from 'react';
import Navbar from './Navbar';

const NavbarContainer = (props) => {
    const state = props.store.getState();
    return (
        <Navbar sidebar={state.sidebar} />
    );
};

export default NavbarContainer;