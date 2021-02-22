import React from 'react'

import styles from "./style.module.css"

const Search = ({ handleChange }) => {
    return (
        <div className={styles.search}>
            <fieldset className={styles.searchCard}>
                <input
                type="text"
                name="search"
                className={styles.searchInput}
                onChange={handleChange}
                placeholder="Search"
                />
            </fieldset>
        </div>
    )
}

export default Search
