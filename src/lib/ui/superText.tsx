import React from "react"

import styles from './superText.module.scss'

export function SuperText ({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <p className={styles.container}>
            {children}
        </p>
    )
}

export default SuperText
