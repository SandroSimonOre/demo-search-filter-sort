import { useEffect, useState } from 'react'
import {courses} from './data/courses'
import styles from './App.module.scss'

export default function App() {
  
  const checkList = [
    {id: 'python', caption: 'Python'},
    {id: 'excel', caption: 'Excel'},
    {id: 'databases', caption: 'Databases'},
    {id: 'powerbi', caption: 'Power BI'}
  ];

  const [order, setOrder] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState(courses)
  const [categories, setCategories] = useState([])

  // Order
  useEffect( ()=> {
    switch (order) {
      case 'titleAsc':
        setData( p => [...p].sort((a, b) => a.title > b.title ? 1 : -1))
        break
      case 'titleDesc':
        setData( p => [...p].sort((a, b) => a.title < b.title ? 1 : -1))
        break
      case 'newest':
        setData( p => [...p].sort((a, b) => a.id < b.id ? 1 : -1))
        break
      case 'oldest':
        setData( p => [...p].sort((a, b) => a.id > b.id ? 1 : -1))
        break
    }   
  }, [order])
  
  // Search and Filter
  useEffect( ()=> {
    
    let updatedData = [...courses]
    if (categories.length > 0 ) {
      updatedData = updatedData.filter(e => categories.includes(e.categoryId))
    }
    updatedData = updatedData.filter(c => c.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    
    setData(updatedData)

  }, [categories, searchTerm])

  const handleCheck = e => {
    if (e.target.checked) {
      setCategories([...categories, e.target.value])
    } else {
      setCategories([...categories.filter(c => c !== e.target.value)])
    }
  }

  const handleChange = e => {
    const updateSearchTerm = setTimeout(()=> {
      setSearchTerm(e.target.value)
    }, 2000)
    return ()=> clearTimeout(updateSearchTerm)
  }

  return (
    <div className={styles.App}>
      <section className={styles.header}>
        <h1>Banner here</h1>  
      </section>

      <section className={styles.sidebar}>
          {
            checkList.map(e => (
              <div key={e.id} onChange={handleCheck}>
                <input value={e.id} type="checkbox" />
                <span>{e.caption}</span>
              </div>
            ))
          }
        </section> 

      <section className={styles.main}>
        
        

        <div className=''>
          <div>
            <label htmlFor="searchTerm">Write your search</label>
            <input onChange={ handleChange /* e => setSearchTerm(e.target.value) */} type="text" id="searchTerm" placeholder="Example: Python" />
          </div>

          <div className={styles.dropdown}>
            <span>Ordenar</span>
            <ul className={styles.menu}>
              <li onClick={() => setOrder('titleAsc')}>Alphabetical (A-Z)</li>
              <li onClick={() => setOrder('titleDesc')}>Alphabetical (Z-A)</li>
              <li onClick={() => setOrder('newest')}>Newest</li>
              <li onClick={() => setOrder('oldest')}>Oldest</li>
            </ul>
          </div>

          <p>{data.length}</p>
        
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
        </div>
      </section>
    </div>
  )
}