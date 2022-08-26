import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photo: 'https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png', followed: false, fullName: 'Denis', status: 'I am boss', location: {city: 'Yaroslavl', country: 'Russia'}},
            {id: 2, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU', followed: false, fullName: 'Vladimir', status: 'Hello my friends', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photo: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg', followed: false, fullName: 'Tommy', status: 'Base', location: {city: 'Kostroma', country: 'Russia'}},
            {id: 4, photo: 'https://icon-library.com/images/avatar-icon-free/avatar-icon-free-15.jpg', followed: true, fullName: 'Secret', status: 'Not base', location: {city: 'Ivanovo', country: 'Russia'}}
        ]);
    };

    return (
        <div>
            {
                props.users.map((u) => 
                    <div className={s.friends} key={u.id}>
                        <span className={s.card}>
                            <div>
                                <img className={s.logo} src={u.photo} alt="image friends" />
                            </div>
                            <div>
                                { u.followed === true 
                                    ? <button className={s.button} onClick={() => {props.unfollow(u.id)}} >UnFollow</button> 
                                    : <button className={s.button} onClick={() => {props.follow(u.id)}}>Follow</button> }
                            </div>
                        </span>
                        <span className={s.info}>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    );
};

export default Users;