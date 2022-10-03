import React from 'react';
import s from './Users.module.css';
import logo from '../../../assets/images/logo.png';
import but from '../../common/button/Button.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [1, props.currentPage - 1, props.currentPage, props.currentPage + 1, pagesCount];

    if (props.currentPage < 4) {
        pages = [1, 2, 3, 4, pagesCount];
    };

    if (props.currentPage > pagesCount - 2) {
        pages = [1, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
    };
    return (
        <div>
                <div className={s.pages}>
                    {
                        pages.map(p => {
                            if (pages[1] !== -3) {
                                return (
                                    <span key={p} onClick={() => props.onPageChanged(p)} className={props.currentPage === p ? s.selectPage : s.page}>
                                        { p === pagesCount && props.currentPage < pagesCount - 2 && ' ... ' }
                                        { p }
                                        { p === 1 && props.currentPage > 3 && ' ... ' }
                                    </span>
                                );
                            };
                        })
                    }
                </div>
                {
                    props.isFetching 
                        ? null
                        : props.users.map((u) => 
                            <div className={s.friends} key={u.id}>
                                <span className={s.card}>
                                    <div>
                                        <NavLink to={`/profile/${u.id}`}>
                                            <img className={s.logo} src={u.photos.small ? u.photos.small : logo} alt="image friends" />
                                        </NavLink>
                                    </div>
                                    <div>
                                        { u.followed === true 
                                            ? <button className={but.button} onClick={() => {

                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "abc3ad55-35be-4da2-8afc-d1576638f8fa"
                                                    }
                                                })
                                                    .then(res => {
                                                        if (res.data.resultCode == 0) {
                                                            props.unfollow(u.id)
                                                        };
                                                    })
                                                    .catch(err => console.log(err));
                                                
                                            }} >UnFollow</button> 
                                            : <button className={but.button} onClick={() => {

                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "abc3ad55-35be-4da2-8afc-d1576638f8fa"
                                                    }
                                                })
                                                    .then(res => {
                                                        if (res.data.resultCode == 0) {
                                                            props.follow(u.id);
                                                        };
                                                    })
                                                    .catch(err => console.log(err));
                                            }}>Follow</button> }
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

export default Users;