import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../../redux/profile-reducer';
import { getAuthUserThunkCreator } from '../../../redux/auth-reducer';
import { useParams, Navigate } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

// hooks
const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent 
            {...props}
            params={params}
        />
    );
};

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
        if (!this.props.auth.isAuth) return <Navigate to={'/login'} />
        return <Profile profile={this.props.profile} />
    };
};

const mapStateToProps = (state) => ({ profile: state.profilePage.profile, auth: state.auth });

const dispatch = { setUserProfile, getAuthUserThunkCreator };

const WithUrlDataContainerComponent = withRouter(ProfileComponent);

const ProfileContainer = connect(mapStateToProps, dispatch)(WithUrlDataContainerComponent);

export default ProfileContainer;