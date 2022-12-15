import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../../redux/profile-reducer';
import { getAuthUserThunkCreator } from '../../../redux/auth-reducer';
import { usersAPI } from '../../../api/api';
import { withAuthRedirect, withParamsRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileComponent extends React.Component {

    componentDidMount() {
        this.props.getAuthUserThunkCreator();
        let userID = this.props.params.userID;
        if (!userID) {
            userID = 25638;
        };
        usersAPI.profileUserID(userID)
            .then(data => {
                this.props.setUserProfile(data);
            })
            .catch(err => console.log(err));
    };

    render() {
        return <Profile profile={this.props.profile} />
    };
};

const mapStateToProps = (state) => ({ profile: state.profilePage.profile, auth: state.auth });

const dispatch = { setUserProfile, getAuthUserThunkCreator };

export default compose(
    connect(mapStateToProps, dispatch),
    withAuthRedirect,
    withParamsRedirect
)(ProfileComponent);