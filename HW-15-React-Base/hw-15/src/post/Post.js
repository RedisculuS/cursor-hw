import React from 'react';
import '../post/Post-style.css';

const Post = (props) => {

    return(
        <div className="post">
            <div className="anakyn-Post">
                <div className="info">
                    <img className="pic" src={props.author.photo}></img>
                    <div className="author-Info">
                        <p className="name">{props.author.name}</p>
                        <p className="nickname">{props.author.nickname}</p>
                        <p className="data">{props.date}</p>
                    </div>
                    <p className="content">{props.content}</p>
                    <img className="post-Image" src={props.image}></img>
                </div>
            </div>
        </div>
    )
}

export default Post;