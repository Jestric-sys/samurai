import React from 'react';
import Settings from './Settings';
import { getAuthUserThunkCreator } from '../../../redux/auth-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class SettingsAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getAuthUserThunkCreator();
    };

    render() {
        return <Settings />
    };
};

const mapStateToProps = (state) => ({auth: state.auth});
const dispatch = { getAuthUserThunkCreator };

export default compose(
    connect(mapStateToProps, dispatch),
    withAuthRedirect
)(SettingsAPIComponent);