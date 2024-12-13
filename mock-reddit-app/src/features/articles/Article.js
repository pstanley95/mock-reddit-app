import React from "react";
import styles from './Article.module.css';
import upvote from './resources/upvote.svg';
import { useState } from "react";

const Article = (props) => {
    const { id, title, content, initialVotes } = props;
    const [votes, setVotes] = useState(initialVotes);
    
    const handleUpvote = () => {
        setVotes(votes+1);
    }

    const handleDownvote = () => {
        setVotes(votes-1);
    }

    return (
        <div className={styles.articleContainer}>
            <div className={styles.articleTitle}>
                <div className={styles.icon}>
                    <button role='upvote' onClick={handleUpvote} aria-label='Upvote' className={styles.upvote} />
                    <p>{votes}</p>
                    <button role='downvote' onClick={handleDownvote} aria-label='Downvote' className={styles.downvote}/>
                </div>
                <h2>{title}</h2>
            </div>
            <div className={styles.articleContent}>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Article;