import React from 'react'
import { FaSearch } from 'react-icons/fa';
import {IconContext} from "react-icons"

import styles from "./style.module.css"

const Search = ({ handleChange }) => {
    return (
        <div className={styles.search}>
            <fieldset className={styles.searchCard}>
                <IconContext.Provider value={{ style: {fontSize: '20px', color: "gray", 'padding-right': "5px", 'padding-top': "4px"}}}>
                    <FaSearch />
                </IconContext.Provider>
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
