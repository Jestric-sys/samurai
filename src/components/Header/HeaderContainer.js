import React from 'react';
import Header from './Header';
import { getAuthUserThunkCreator } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getAuthUserThunkCreator();
    };

    render() {return <Header {...this.props} />};
};

const mapStateToProps = (state) => ({auth: state.auth});
const dispatch = { getAuthUserThunkCreator };

const HeaderContainer = connect(mapStateToProps, dispatch)(HeaderAPIComponent);

export default HeaderContainer;