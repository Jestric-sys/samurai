import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

let dialogsData = [
    {id: 1, name: 'Denis'},
    {id: 2, name: 'Vladimir'},
    {id: 3, name: 'Tommy'}
];

let messagesData = [
    {message: 'Hi'},
    {message: 'Hou ara you?'},
    {message: 'Welcome new chat'}
]

let dialogsElements = dialogsData
    .map( dialog => <Dialog name={dialog.name} id={dialog.id} /> );

let messageElements = messagesData
    .map(message => <Message message={message.message} />)

const Dialogs = () => {
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