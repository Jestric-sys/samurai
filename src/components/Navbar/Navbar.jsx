import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' className={({ isActive }) => isActive ? s.active : undefined}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({ isActive }) => isActive ? s.active : undefined}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({ isActive }) => isActive ? s.active : undefined}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({ isActive }) => isActive ? s.active : undefined}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={({ isActive }) => isActive ? s.active : undefined}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={({ isActive }) => isActive ? s.active : undefined}>Users</NavLink>
            </div>
            <Friends friends={props.sidebar.friends} />
        </nav>
    );
};

export default Navbar;