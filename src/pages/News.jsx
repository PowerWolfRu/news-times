import React, {useContext, useEffect, useState} from 'react';
import ArticleList from "../components/Articles/ArticleList";
import Pages from "../UI/Pages";
import "./styles/News.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Loader from "../UI/Loader";
import {observer} from "mobx-react-lite";
import {Context} from "../context";
import {getArticles, getCategories, getCreators} from "../API/ArticleAPI";

const News = observer(() => {
    
    const {article} = useContext(Context);

    const [currentPage, setCurrentPage] = useState(1);
    const [articlePerPage] = useState(6);

    useEffect(() => {
       getCategories().then(data => article.setCategories(data));
       getCreators().then(data => article.setCreators(data));
       getArticles(null, null, 1, 6).then(data => {
           article.setArticles(data)
           article.setTotalCount(data)
       })
    }, []);

    useEffect(() => {
       getArticles(article.selectedCategory.id, article.selectedCreator.id, article.page, 6)
           .then(data => {
               article.setArticles(data)
               article.setTotalCount(data)
           });
    }, [article.selectedCategory, article.selectedCreator, article.page, ]);

    const lastArticleIndex = currentPage * articlePerPage;
    const firstArticleIndex = lastArticleIndex - articlePerPage;
    

    return (
        <div className="container">
            <div className="article__list">
                <ArticleList />
                <Pages />
            </div>
            <div className="category__list">
                <Sidebar/>
            </div>
        </div>
    );
});

export default News;