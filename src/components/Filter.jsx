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
      {
        checkList.map(e => (
          <label key={e.id} onChange={handler} className={styles.menuItem}>
            <input value={e.id} type="checkbox" />
            {e.caption}
          </label>
        ))
      }
    </div>
  )
}