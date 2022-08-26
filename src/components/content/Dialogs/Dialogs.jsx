import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    if (props.messagePage.dialogs.length === 0) {
        props.setDialogs([
            {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', name: 'Denis'},
            {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', name: 'Vladimir'},
            {id: 3, img: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg', name: 'Tommy'}
        ]);
    };
    if (props.messagePage.messages.length === 0) {
        props.setMessages([
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hou ara you?'},
            {id: 3, message: 'Welcome new chat'}
        ])
    };
    const message = React.createRef();
    const onChangeMessage = () => {
        const text = message.current.value;
        props.updateMessageText(text);
    };
    const sendMessage = () => {
        props.sendMessage();
    };
    const dialogsElements = props.messagePage.dialogs.map(dialog => <Dialog key={dialog.id} dialog={dialog} />);
    const messageElements = props.messagePage.messages.map(message => <Message key={message.id} message={message} />);
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
                    <textarea onChange={onChangeMessage}  ref={message} className={s.textSendMessage} value={props.messagePage.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage} className={s.button}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;