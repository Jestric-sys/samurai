import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../../redux/profile-reducer';
import { getAuthUserThunkCreator } from '../../../redux/auth-reducer';
import { withAuthRedirect, withParamsRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUserProfileThunkCreate, getStatusProfileThunkCreate, putStatusProfileThunkCreate } from '../../../redux/profile-reducer';

class ProfileComponent extends React.Component {

    componentDidMount() {
        this.props.getAuthUserThunkCreator();
        let userID = this.props.params.userID;
        if (!userID) {
            userID = 25638;
        };
        this.props.getUserProfileThunkCreate(userID);
        this.props.getStatusProfileThunkCreate(userID);
    };

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.putStatusProfileThunkCreate} />
    };
};

const mapStateToProps = (state) => ({ profile: state.profilePage.profile, status: state.profilePage.status });

const dispatch = { setUserProfile, getAuthUserThunkCreator, getUserProfileThunkCreate, getStatusProfileThunkCreate, putStatusProfileThunkCreate };

export default compose(
    connect(mapStateToProps, dispatch),
    //withAuthRedirect,
    withParamsRedirect
)(ProfileComponent);