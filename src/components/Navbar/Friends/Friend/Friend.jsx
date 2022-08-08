import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <NavLink to={`/dialogs/${props.state.id}`} className={s.friendLink}>
            <div className={s.avatar}>
                <img src={props.state.img} alt="avatar logo" />
                <div>
                    <span className={s.name}>{props.state.name}</span>
                </div>
            </div>
        </NavLink>
    );
};

export default Friend;