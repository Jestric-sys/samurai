import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.state.id}`} className={({ isActive }) => isActive ? s.active : undefined}>
                <div className={s.avatarLogo}>
                    <img src={props.state.img} alt="avatar logo" />
                </div>
                <div>
                    <span>{props.state.name}</span>
                </div>
            </NavLink>
        </div>
    );
};

export default Dialog;