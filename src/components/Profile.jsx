import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content_header}>
                <img src="https://steamuserimages-a.akamaihd.net/ugc/1691652784003611560/9368476CF11779DC22928537B592068DD3A0F836/" alt="img content" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                    <div className={s.item}>post 3</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;