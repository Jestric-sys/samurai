import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/message-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            const action = addMessageActionCreator();
            dispatch(action);
        },
        updateMessageText: (text) => {
            const action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;