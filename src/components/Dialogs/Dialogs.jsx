import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" className={({ isActive }) => isActive ? s.active : undefined}>Denis</NavLink>
                </div>
                <div className={s.dialog}>
                    Vladimir
                </div>
                <div className={s.dialog}>
                    Tommy
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hou ara you?</div>
                <div className={s.message}>Welcome new chat</div>
            </div>
        </div>
    )
};

export default Dialogs;