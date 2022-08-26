import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <NavLink to={`/dialogs/${props.friend.id}`} className={s.friendLink}>
            <div className={s.avatar}>
                <img src={props.friend.img} alt="avatar logo" />
                <div>
                    <span className={s.name}>{props.friend.name}</span>
                </div>
            </div>
        </NavLink>
    );
};

export default Friend;