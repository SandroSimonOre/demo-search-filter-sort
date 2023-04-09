import styles from '../styles/List.module.scss'

export const List = ({data}) => {
    return (
        <div className={styles.list}>
            {
                data.map(c => (
                <div key={c.id} className={styles.card}>
                    <h3>{c.title}</h3>
                    <p>{c.categoryName.toUpperCase()}</p>
                </div>
                ))
            }
        </div>
    )
}