import React from "react";
import { useState, useEffect } from "react";
import styles from './resources/SearchBar.module.css'

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');
    
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        // do the logic
        e.preventDefault();
        setSearchValue('');
    }

    useEffect(() => {
        
    })

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" onChange={handleChange} value={searchValue} placeholder="Search for things" className={styles.textInput}/>
            <input type='button' placeholder="Search" className={styles.submitButton}/>
        </form>
    )
}

export default SearchBar;