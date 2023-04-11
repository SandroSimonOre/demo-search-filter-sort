import { VideoCard } from './VideoCard'
import styles from '../styles/List.module.scss'

export const List = ({data}) => {
    return (
        <div className={styles.list}>
            {
                data.map(item => (
                    <VideoCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        width='300'
                        height='215'
                    />
                ))
            }
        </div>
    )
}