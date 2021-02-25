import React from 'react'

import PageNumber from "../PageNumber"
import styles from "./style.module.css"

const ShopWrapper = ({ children }) => {
    return (
        <div class={styles.shopWrapper}>
            {children}
            
        </div>
    )
}

export default ShopWrapper
