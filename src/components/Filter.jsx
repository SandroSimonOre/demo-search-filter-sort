import styles from '../styles/Filter.module.scss'
import { categories } from '../data/categories'

export const Filter = ({handler}) => {
  return (
    <div className={styles.filter}>
      <h2>Filter</h2>
      {
        categories.map(e => (
          <label key={e.id} onChange={handler} className={styles.menuItem}>
            {e.caption}
            <input value={e.id} type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
        ))
      }
    </div>
  )
}