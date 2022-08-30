import React from 'react';
import Dialogs from './Dialogs';
import { addMessage, updateNewMessageText, setMessages, setDialogs } from '../../../redux/message-reducer';
import { connect } from 'react-redux';

class DialogsAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setDialogs([
            {id: 1, img: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', name: 'Denis'},
            {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', name: 'Vladimir'},
            {id: 3, img: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg', name: 'Tommy'}
        ]);
        this.props.setMessages([
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hou ara you?'},
            {id: 3, message: 'Welcome new chat'}
        ]);
    };

    sendMessage = () => this.props.addMessage();
    onChangeMessage = (text) => this.props.updateNewMessageText(text);

    render() {
        return <Dialogs 
                    messagePage={this.props.messagePage}
                    onChangeMessage={this.onChangeMessage}
                    sendMessage={this.sendMessage}
                />
    };
};

const mapStateToProps = (state) => ({ messagePage: state.messagePage });
const dispatch = {
    addMessage,
    updateNewMessageText,
    setMessages,
    setDialogs
};

const DialogsContainer = connect(mapStateToProps, dispatch)(DialogsAPIComponent);

export default DialogsContainer;