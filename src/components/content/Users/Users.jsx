import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => props.setUsers(res.data.items));
    };

    return (
        <div>
            {
                props.users.map((u) => 
                    <div className={s.friends} key={u.id}>
                        <span className={s.card}>
                            <div>
                                <img className={s.logo} src={u.photos.small ? u.photos.small : 'https://www.meme-arsenal.com/memes/39321a804031b9f9f89c520554104704.jpg'} alt="image friends" />
                            </div>
                            <div>
                                { u.followed === true 
                                    ? <button className={s.button} onClick={() => {props.unfollow(u.id)}} >UnFollow</button> 
                                    : <button className={s.button} onClick={() => {props.follow(u.id)}}>Follow</button> }
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