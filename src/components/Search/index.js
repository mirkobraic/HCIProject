import React from 'react'
import { FaSearch } from 'react-icons/fa';
import {IconContext} from "react-icons"

import styles from "./style.module.css"

const Search = ({ handleChange }) => {
    return (
        <div className={styles.search}>
            <div className={styles.searchCard}>
                <FaSearch className={styles.searchIcon}/>
                <input
                type="text"
                name="search"
                className={styles.searchInput}
                onChange={handleChange}
                placeholder="Search"
                />
            </div>
        </div>
    )
}

export default Search
