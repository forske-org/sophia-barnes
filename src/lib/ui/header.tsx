import Navigation from './navigation'

import styles from './header.module.scss'

export function Header () {
    return (
        <header className={styles.container}>
            <h1>SOPHIA BARNES</h1>
            <h4>WRITING AND EDITING SERVICES</h4>
            <Navigation />
        </header>
    )
}

export default Header
