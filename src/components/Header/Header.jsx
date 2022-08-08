import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to='/'>
                <img src='https://www.meme-arsenal.com/memes/5ccc9b0b8134a0d77109dda7baf6cc10.jpg'></img>
            </NavLink>
        </header>
    )
};

export default Header;