import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profile_header}>
                <img src="https://steamuserimages-a.akamaihd.net/ugc/1691652784003611560/9368476CF11779DC22928537B592068DD3A0F836/" alt="img content" />
            </div>
            <div className={s.infoBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;