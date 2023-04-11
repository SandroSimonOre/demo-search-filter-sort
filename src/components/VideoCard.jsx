import styles from '../styles/VideoCard.module.scss'

export const VideoCard = ({ id, title, width, height } ) => (
    <div className={styles.videoCard}>
      <iframe
        width={width} //"853"
        height={height} //"480"
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <p>{title}</p>
    </div>
);
  