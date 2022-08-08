import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content_header}>
                <img src="https://steamuserimages-a.akamaihd.net/ugc/1691652784003611560/9368476CF11779DC22928537B592068DD3A0F836/" alt="img content" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;