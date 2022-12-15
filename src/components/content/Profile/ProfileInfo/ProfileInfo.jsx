import React from 'react';
import s from './ProfileInfo.module.css';
import logo from '../../../../assets/images/logo.png';
import PreLoader from '../../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreLoader />
    };

    return (
        <div>
            {/* <div className={s.profile_header}>
                <img src="https://steamuserimages-a.akamaihd.net/ugc/1691652784003611560/9368476CF11779DC22928537B592068DD3A0F836/" alt="img content" />
            </div> */}
            <div className={s.name}>
                <h1>{ props.profile.fullName }</h1>
            </div>
            <div className={s.infoBlock}>
                <img 
                    className={s.profileLogo} 
                    width='200px' 
                    src={props.profile.photos.large ? props.profile.photos.large : logo} 
                    alt="avatar profile" 
                />
                <div>
                    <ProfileStatus status={'Hello my friends'} />
                    <div className={s.aboutMe}>
                        <span className={s.titleAboutMe}>Обо мне:</span>
                        <span>{ props.profile.aboutMe ? props.profile.aboutMe : '...' }</span>
                    </div>
                    <div className={s.aboutMe}>
                        <span className={s.titleAboutMe}>Контакты:</span>
                        <span>facebook - { props.profile.contacts.facebook ? props.profile.contacts.facebook : 'нет' }</span>
                        <span>website - { props.profile.contacts.website ? props.profile.contacts.website : 'нет' }</span>
                        <span>vk - { props.profile.contacts.vk ? props.profile.contacts.vk : 'нет' }</span>
                        <span>twitter - { props.profile.contacts.twitter ? props.profile.contacts.twitter : 'нет' }</span>
                        <span>instagram - { props.profile.contacts.instagram ? props.profile.contacts.instagram : 'нет' }</span>
                        <span>youtube - { props.profile.contacts.youtube ? props.profile.contacts.youtube : 'нет' }</span>
                        <span>github - { props.profile.contacts.github ? props.profile.contacts.github : 'нет' }</span>
                        <span>mainLink - { props.profile.contacts.mainLink ? props.profile.contacts.mainLink : 'нет' }</span>
                    </div>
                    <div className={s.aboutMe}>
                        <span className={s.titleAboutMe}>Статус поиска работы:</span>
                        <span>{ props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'Не ищу работу' }</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;