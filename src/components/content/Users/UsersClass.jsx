import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import logo from '../../../assets/images/logo.png';

class Users extends React.Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => {
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount);
                });
        // axios.get('http://127.0.0.3:3001/friends')
        //     .then(res => props.setUsers(res.data.items));
    };

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
                .then(res => this.props.setUsers(res.data.items));
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [1, this.props.currentPage - 1, this.props.currentPage, this.props.currentPage + 1, pagesCount];

        if (this.props.currentPage < 4) {
            pages = [1, 2, 3, 4, pagesCount];
        };

        if (this.props.currentPage > pagesCount - 2) {
            pages = [1, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
        };
        return (
            <div>
                <div className={s.pages}>
                    {
                        pages.map(p => {
                            return (
                                <span key={p} onClick={() => this.onPageChanged(p)} className={this.props.currentPage === p ? s.selectPage : s.page}>
                                    { p === pagesCount && this.props.currentPage < pagesCount - 2 && ' ... ' }
                                    { p }
                                    { p === 1 && this.props.currentPage > 3 && ' ... ' }
                                </span>
                            );
                        })
                    }
                </div>
                {
                    this.props.users.map((u) => 
                        <div className={s.friends} key={u.id}>
                            <span className={s.card}>
                                <div>
                                    <img className={s.logo} src={u.photos.small ? u.photos.small : logo} alt="image friends" />
                                </div>
                                <div>
                                    { u.followed === true 
                                        ? <button className={s.button} onClick={() => {this.props.unfollow(u.id)}} >UnFollow</button> 
                                        : <button className={s.button} onClick={() => {this.props.follow(u.id)}}>Follow</button> }
                                </div>
                            </span>
                            <span className={s.info}>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status ? u.status : 'status is not'}</div>
                                </span>
                                <span>
                                    <div>{u.location ? u.location.country : 'location is not'}</div>
                                    <div>{u.location ? u.location.city : 'city is not'}</div>
                                </span>
                            </span>
                        </div>
                    )
                }
            </div>
        );
    };
};

export default Users;