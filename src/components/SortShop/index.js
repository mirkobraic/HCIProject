import React from 'react'

import styles from "./style.module.css"

import { sortCriteriaShop } from '../../constants/const'

const SortShop = ({ handleChange }) => {
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

                  <option value={''}>Rating</option>
                  {
                    sortCriteriaShop.map(sort => (
                      <option key={sort.name} value={sort.name}>{sort.name}</option>
                    ))
                  }
                </select>
            </fieldset>
        </div>
    )
}

export default SortShop
