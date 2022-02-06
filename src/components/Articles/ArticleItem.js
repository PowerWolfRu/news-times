import React, {useContext} from 'react';
import "./ArticleItem.css";
import {useNavigate} from "react-router-dom";
import {Context} from "../../context";

const ArticleItem = ({article}) => {

    const history = useNavigate();

    return (
        <div className="article-item">
            <h2 className="title">{article.title}</h2>
            <p className="description">{article.body}</p>
            <span className="topic">{article.category.name}</span>
        </div>
    );
};

export default ArticleItem;