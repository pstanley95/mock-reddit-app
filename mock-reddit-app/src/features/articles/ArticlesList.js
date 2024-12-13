import React from "react";
import Article from './Article';
import styles from './Article.module.css'
import { selectSearchValue } from "../search/searchSlice";
import { useSelector } from 'react-redux'
import { useEffect } from "react";

const ArticleList = (props) => {
    const { articles } = props;        
    const searchValue = useSelector(selectSearchValue);

    const filteredArticles = articles.filter((article) => (article.title.toLowerCase().includes(searchValue.toLowerCase())));
    
    if (!filteredArticles || filteredArticles.length ==0) {
        return <p>No articles available</p>
    }
    return (
        <ul className={styles.articleList}>
            {filteredArticles.map((article) => <Article id={article.id} title={article.title} content={article.content} initialVotes={article.initialVotes} />)}
        </ul>
    )
}

export default ArticleList;