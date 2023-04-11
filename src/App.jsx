import { useEffect, useState } from 'react'
import { Banner } from './components/Banner';
import { List } from './components/List';
import { Filter } from './components/Filter';
import { Sort } from './components/Sort';
import { SearchBox } from './components/SearchBox';
import { GoMarkGithub } from 'react-icons/go'
import { GrLinkedin } from 'react-icons/gr'
// import { TiSocialLinkedinCircular } from 'react-icons/ti'
//import {courses} from './data/courses'
import { videos } from './data/videos';
import styles from './styles/App.module.scss'

export default function App() {
  
  const [order, setOrder] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState(videos)
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
    
    let updatedData = [...videos]
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


  return (
    <div className={styles.App}>

      <section className={styles.header}>
        <Banner />  
      </section>

      <section className={styles.sidebar}>
        <Filter handler={handleCheck} />
      </section> 

      <section className={styles.main}>
      
        <div className={styles.searchBoxContainer}>
          <SearchBox setSearchTerm={setSearchTerm} />
        </div>
        
        <div className={styles.results}>
          <p>{`${data.length} results ${searchTerm ? 'for ' + searchTerm : ''}`}</p>
        </div>
        
        <div className={styles.sortContainer}>
            <Sort setOrder={setOrder} />
        </div>
        
        <div className={styles.list}>
          <List data={data} />           
        </div>

      </section>

      <section className={styles.footer}>
        <a href="https://sandrosimon.com" target="_blank" rel="noopener noreferrer">
          sandrosimon.com
        </a>
        
        <ul className={styles.socialMedia}>
          <a href="https://github.com/SandroSimonOre" target="_blank" rel="noopener noreferrer">
            <GoMarkGithub size={30} />
          </a>
          
          <a href="https://www.linkedin.com/in/sandrosimonore/" target="_blank" rel="noopener noreferrer">
            <GrLinkedin size={28} />
          </a>
          
        </ul>
      </section>
      
    </div>
  )
}