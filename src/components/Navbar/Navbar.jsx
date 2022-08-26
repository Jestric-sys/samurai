import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
    if (props.sidebar.friends.length === 0) {
        props.setFriends([
            {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', name: 'Denis'},
            {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', name: 'Vladimir'},
            {id: 3, img: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg', name: 'Tommy'}
        ]);
    };
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