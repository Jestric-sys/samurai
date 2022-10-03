import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <a href='/'>
                <img src='https://www.meme-arsenal.com/memes/5ccc9b0b8134a0d77109dda7baf6cc10.jpg'></img>
            </a>
                <div className={s.loginBlock}>
                    {
                        props.auth.isAuth && props.auth.login !== null
                            ? <NavLink to={'/logout'}>{props.auth.login}</NavLink>
                            : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
        </header>
    )
};

export default Header;