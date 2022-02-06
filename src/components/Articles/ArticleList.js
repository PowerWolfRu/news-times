import React, {useContext} from 'react';
import ArticleItem from "./ArticleItem";
import "../Articles/ArticleList.css";
import {observer} from "mobx-react-lite";
import {Context} from "../../context";

const ArticleList = observer(() => {

    const {article} = useContext(Context);

    return (
        <div className="article-list">
            {article.articles.map(a =>
                <ArticleItem key={a.id} article={a}/>
            )}
        </div>
    );
});

export default ArticleList;