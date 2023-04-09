import styles from '../styles/Banner.module.scss'

export const Banner = () => {
    return (
        <div className={styles.Banner}>
            <div className={styles.text}>
                <h1>
                    Browse all learning paths and modules
                </h1>
                <p>
                    Learn new skills and discover the power of Microsoft products with step-by-step guidance. Start your journey today by exploring our learning paths and modules.
                </p>
            </div>
            <div className={styles.illustration}>
                <img src="/banner.jpg" alt="" />
            </div>
        </div>
    )
}