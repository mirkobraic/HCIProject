import React from 'react'

import styles from "./style.module.css"

import { sortCriteria } from '../../constants/const'

const Sort = ({ handleChange }) => {
    return (
        <div className={styles.sort}>
            <fieldset className={styles.sortCard}>
                <label htmlFor="sort" className={styles.sortLabel}>
                    Sort by:&nbsp;
                </label>
                <select
                  name="sort"
                  className={styles.sortInput}
                  onChange={handleChange}
                  >
                  {/*
                  <option>rating</option>
                  */}

                  <option value={''}>Rating</option>
              {
                sortCriteria.map(sort => (
                  <option key={sort.name} value={sort.name}>{sort.name}</option>
                ))
              }
                </select>
            </fieldset>
        </div>
    )
}

export default Sort
