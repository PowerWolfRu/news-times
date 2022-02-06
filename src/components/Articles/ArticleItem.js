import React from 'react';

const ArticleItem = (props) => {

    return (
        <div className="post">
            <h1>{props.post.title}</h1>
            <div>{props.post.body}</div>
        </div>
    );
};

export default ArticleItem;