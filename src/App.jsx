// https://contactmentor.com/checkbox-list-react-js-example/
import { useEffect, useState } from 'react'
import {courses} from './data/courses'
import styles from './App.module.css'

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
    <>
      <div>
        <label htmlFor="searchTerm">Write your search</label>
        <input onChange={ handleChange /* e => setSearchTerm(e.target.value) */} type="text" id="searchTerm" placeholder="Example: Python" />
      </div>

      <div>
        <button onClick={() => setOrder('titleAsc')}>Sort Asc</button>
        <button onClick={() => setOrder('titleDesc')}>Sort Desc</button>
        <button onClick={() => setOrder('newest')}>Newest</button>
        <button onClick={() => setOrder('oldest')}>Oldest</button>
      </div>

      <p>{data.length}</p>

      <div className={styles.checksContainer}>
        {
          checkList.map(e => (
            <div key={e.id} onChange={handleCheck}>
              <input value={e.id} type="checkbox" />
              <span>{e.caption}</span>
            </div>
          ))
        }
      </div>  
      
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
    </>
  )
}