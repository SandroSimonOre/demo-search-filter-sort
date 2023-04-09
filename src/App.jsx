import { useEffect, useState } from 'react'
import { Banner } from './components/Banner';
import { List } from './components/List';
import { Filter } from './components/Filter';
import {courses} from './data/courses'
import styles from './styles/App.module.scss'

export default function App() {
  
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
        <Banner />  
      </section>

      <section className={styles.sidebar}>
        <Filter handler={handleCheck} />
      </section> 

      <section className={styles.main}>
      
        <div className={styles.search}>
          <input onChange={ handleChange } type="text" id="searchTerm" placeholder="Search" />
        </div>
        
        <div className={styles.results}>
          <p>{`${data.length} results ${searchTerm ? 'for ' + searchTerm : ''}`}</p>
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
        
        <div className={styles.list}>
          <List data={data} />           
        </div>

      </section>
      
    </div>
  )
}