import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id} />);
    const messageElements = props.messages.map(message => <Message key={message.id} message={message.message} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
};

export default Dialogs;