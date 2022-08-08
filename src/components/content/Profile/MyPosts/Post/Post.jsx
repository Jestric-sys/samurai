import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src={props.state.img} alt="avatar logo" />
                { props.state.message }
                <div>
                    <span>{ props.state.like } like</span>
                </div>
            </div>
        </div>
    );
};

export default Post;