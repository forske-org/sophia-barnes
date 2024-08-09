import Link from 'next/link'

import styles from './navigation.module.scss'

export function Navigation () {
    return (
        <nav className={styles.container}>
            <span></span>
            <Link href='/'>About</Link>
            <Link href='/non-fiction'>Non-Fiction</Link>
            <Link href='/fiction'>Fiction</Link>
            <Link href='/editing'>Editing</Link>
            <span></span>
        </nav>
    )
}

export default Navigation
