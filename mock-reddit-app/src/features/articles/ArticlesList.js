import React from "react";
import Article from './Article';
import styles from './Article.module.css'

const ArticleList = (props) => {
    const { articles } = props;        
    if (!articles || articles.length ==0) {
        return <p>No articles available</p>
    }
    return (
        <ul className={styles.articleList}>
            {articles.map((article) =>  <Article id={article.id} title={article.title} content={article.content} initialVotes={article.initialVotes} />)}
        </ul>
    )
}

export default ArticleList;