import React from 'react';
import Navbar from './Navbar';
import StoreContext from '../../StoreContext';

const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().sidebar;
                return <Navbar sidebar={state} />
            }}
        </StoreContext.Consumer>
    );
};

export default NavbarContainer;