import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, fetching, following } from '../../../redux/users-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import PreLoader from '../../common/preloader/Preloader';
import { setAuthUser } from '../../../redux/auth-reducer';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(res => {
                res.data.resultCode === 1
                ? this.props.setAuthUser(null, null, null)
                : this.props.setAuthUser(res.data.data.id, res.data.data.email, res.data.data.login);
            })
            .catch(err => console.log(err));
        this.props.fetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
                .then(res => {
                    this.props.fetching(false);
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount);
                })
                .catch(err => console.log(err));
        // axios.get('http://127.0.0.3:3001/friends')
        //     .then(res => props.setUsers(res.data.items));
    };

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.fetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
                .then(res => {
                    this.props.fetching(false);
                    this.props.setUsers(res.data.items)
                })
                .catch(err => console.log(err));
    };

    render() {
        return this.props.auth.isAuth && this.props.auth.login !== null
        ? <>
            { this.props.isFetching ? <PreLoader /> : null }
            <Users 
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                following={this.props.following}
                followingInProgress={this.props.followingInProgress}
            />
        </>
        : <div>Вы не автаризованы</div>
    };
};

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    auth: state.auth,
    followingInProgress: state.usersPage.followingInProgress
});
const dispatch = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    fetching,
    setAuthUser,
    following
};

const UsersContainer = connect(mapStateToProps, dispatch)(UsersAPIComponent);

export default UsersContainer;