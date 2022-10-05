import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../../redux/profile-reducer';
import { setAuthUser } from '../../../redux/auth-reducer';
import { useParams } from 'react-router-dom';

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
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                res.data.resultCode === 1
                ? this.props.setAuthUser(null, null, null)
                : this.props.setAuthUser(res.data.data.id, res.data.data.email, res.data.data.login)
            })
            .catch(err => console.log(err));
        let userID = this.props.params.userID;
        if (!userID) {
            userID = 25638;
        };
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
                .then(res => {
                    this.props.setUserProfile(res.data);
                })
                .catch(err => console.log(err));
    };

    render() {
        return this.props.auth.isAuth && this.props.auth.login !== null
        ? <Profile profile={this.props.profile} />
        : <div>Вы не автаризованы</div>
    };
};

const mapStateToProps = (state) => ({ profile: state.profilePage.profile, auth: state.auth });

const dispatch = { setUserProfile, setAuthUser };

const WithUrlDataContainerComponent = withRouter(ProfileComponent);

const ProfileContainer = connect(mapStateToProps, dispatch)(WithUrlDataContainerComponent);

export default ProfileContainer;