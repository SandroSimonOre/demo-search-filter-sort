import styles from '../styles/Filter.module.scss'

const checkList = [
  {id: 'python', caption: 'Python'},
  {id: 'excel', caption: 'Excel'},
  {id: 'databases', caption: 'Databases'},
  {id: 'powerbi', caption: 'Power BI'}
];


export const Filter = ({handler}) => {
  return (
    <div className={styles.filter}>
      <h2>Filter</h2>
      {
        checkList.map(e => (
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