import styles from './card.module.scss'

export function Card ({
    title,
    description,
}: {
    title: string
    description?: string
}) {
    return (
        <div className={`${styles.class} ${styles.container}`}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Card
