import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import logo from '../../../assets/images/logo.png';

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => this.props.setUsers(res.data.items));
            // axios.get('http://127.0.0.3:3001/friends')
            //     .then(res => props.setUsers(res.data.items));
    };

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(res => this.props.setUsers(res.data.items));
    //         // axios.get('http://127.0.0.3:3001/friends')
    //         //     .then(res => props.setUsers(res.data.items));
    //     };
    // };

    render() {
        return (
            <div>
                {/* <button onClick={this.getUsers} className={s.button}>Get users</button> */}
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