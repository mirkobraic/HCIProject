import React from 'react'

import styles from "./style.module.css"

const PageNumber = () => {
    return (
        <p class={styles.pageNumber}>
            <span class={styles.notActive}>{"<<"}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class={styles.notActive}>{"<"}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class={styles.activePage}>1&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>2&nbsp;&nbsp;&nbsp;&nbsp;3</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;{">"}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;{">>"}</span>
        </p>
    )
}

export default PageNumber