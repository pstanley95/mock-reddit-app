import React from "react";
import Article from './Article';
import styles from './Article.module.css'
import { selectSearchValue } from "../search/searchSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { loadArticles, selectArticles } from "./articlesSlice";

const ArticleList = () => {
    const articles = useSelector(selectArticles);
    const searchValue = useSelector(selectSearchValue);

    const dispatch = useDispatch();

    console.log(articles);

    useEffect(() => {
        dispatch(loadArticles()); //When the component mounts, this will run and then anytime dispatch is called
        console.log(articles);
    }, [dispatch])

    const filteredArticles = articles.filter((article) => (article.title.toLowerCase().includes(searchValue.toLowerCase())));
    
    if (!filteredArticles || filteredArticles.length ==0) {
        return <p>No articles available</p>
    }
    return (
        <ul className={styles.articleList}>
            {filteredArticles.map((article) => <Article id={article.id} title={article.title} content={article.content} initialVotes={article.initialVotes} thumbnail={article.thumbnail} subreddit={article.subreddit}/>)}
        </ul>
    )
}

export default ArticleList;