import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.dialog.id}`} className={({ isActive }) => isActive ? s.active : undefined}>
                <div className={s.avatarLogo}>
                    <img src={props.dialog.img} alt="avatar logo" />
                </div>
                <div>
                    <span>{props.dialog.name}</span>
                </div>
            </NavLink>
        </div>
    );
};

export default Dialog;