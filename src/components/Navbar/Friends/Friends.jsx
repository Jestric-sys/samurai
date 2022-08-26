import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
    const friends = props.friends.map(friend => <Friend key={friend.id} friend={friend} />)
    return (
        <div className={s.friendsBlock}>
            <span className={s.title}>Friends:</span>
            <div className={s.friend}>
                {friends}
            </div>
        </div>
    );
};

export default Friends;