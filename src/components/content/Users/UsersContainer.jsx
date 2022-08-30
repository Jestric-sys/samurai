import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, fetching } from '../../../redux/users-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import PreLoader from '../../common/preloader/Preloader';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.fetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => {
                    this.props.fetching(false);
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount);
                });
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
                });
    };

    render() {
        return <>
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
                />
                </>
    };
};

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
});
const dispatch = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    fetching
};

const UsersContainer = connect(mapStateToProps, dispatch)(UsersAPIComponent);

export default UsersContainer;