import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name='Denis' id='1'/>
                <Dialog name='Vladimir' id='2'/>
                <Dialog name='Tommy' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hou ara you?'/>
                <Message message='Welcome new chat'/>
            </div>
        </div>
    )
};

export default Dialogs;