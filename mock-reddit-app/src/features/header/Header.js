import React from "react";
import styles from './Header.module.css';
import redditLogo from './resources/reddit_logo.jpeg'
import SearchBar from "../search/SearchBar";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
        <div className={styles.header}> 
            <img src={redditLogo} alt="Reddit logo" className={styles.logo}/>
            <h1>My Reddit Client</h1>
        </div>
        <div className={styles.spacer}>
                    &nbsp;
        </div>
        <SearchBar />
        </div>
    )
}

export default Header;