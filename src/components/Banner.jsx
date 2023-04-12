import styles from '../styles/Banner.module.scss'

export const Banner = () => {
    return (
        <div className={styles.Banner}>
            <div className={styles.text}>
                <h1>
                    Browse the most interesting YouTube videos about Technology
                </h1>
                <p>
                    Learn about cloud technologies, Frontend, Backend, Machine Learning, Data Science with these great videos.
                </p>
            </div>
            <div className={styles.illustration}>
                <img src="/banner.jpg" alt="" />
            </div>
        </div>
    )
}