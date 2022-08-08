import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogsElements = props.state.profilePage.dialogs.map(dialog => <Dialog key={dialog.id} state={dialog} />);
    const messageElements = props.state.messagePage.messages.map(message => <Message key={message.id} state={message} />);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
            <div className={s.sendMessage}>
                <div>
                    <textarea className={s.textSendMessage}></textarea>
                </div>
                <div>
                    <button className={s.button}>Send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;