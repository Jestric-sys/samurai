import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://icons-for-free.com/download-icon-avatar-1320568024619304547_512.png" alt="avatar logo" />
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
};

export default Post;