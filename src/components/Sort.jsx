import styles from '../styles/Sort.module.scss'

export const Sort = ({setOrder}) => {
    return (
        <div className={styles.sort}>
            
            <div className={styles.title}>
                <span className={styles.text}>Sort by </span>
                <span className={styles.arrow}></span>
            </div>
            
            <ul className={styles.menu}>
              <li onClick={() => setOrder('titleAsc')}>Alphabetical (A-Z)</li>
              <li onClick={() => setOrder('titleDesc')}>Alphabetical (Z-A)</li>
              <li onClick={() => setOrder('newest')}>Newest</li>
              <li onClick={() => setOrder('oldest')}>Oldest</li>
            </ul>
        </div>
    )
}