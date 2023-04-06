// https://contactmentor.com/checkbox-list-react-js-example/
import { useEffect, useState } from 'react'
import {courses} from './data/courses'
import styles from './App.module.css'

export default function App() {
  
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState(courses)
  const [order, setOrder] = useState(0)

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect( ()=> {
    setData(courses.filter(c => c.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())))
  }, [searchTerm])

  useEffect( ()=> {
    
    if (order === 1) {
      console.log('Ascendente...')
      setData( p => p.sort((a, b) => a.title > b.title ? 1 : -1))
    } else if (order == - 1) {
      console.log('Descendente...')
      setData( p => p.sort((a, b) => a.title < b.title ? 1 : -1))
    }
    
  }, [order])
  
  return (
    <>
      <div>
        <label htmlFor="searchTerm">Write your search</label>
        <input onChange={handleChange} type="text" id="searchTerm" placeholder="Example: Python" />
      </div>

      <div>
        <button onClick={()=>setOrder(1)}>Sort Asc</button>
        <button onClick={()=>setOrder(-1)}>Sort Desc</button>
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

