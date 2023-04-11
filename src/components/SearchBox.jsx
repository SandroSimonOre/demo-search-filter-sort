import { useRef } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import styles from '../styles/SearchBox.module.scss'

export const SearchBox = ({setSearchTerm}) => {
    const clearButtonRef = useRef()
    const handleChange = e => {
        const updateSearchTerm = setTimeout(()=> {
          setSearchTerm(e.target.value)
        }, 1000)

        return ()=> clearTimeout(updateSearchTerm)
    }

    const handleClick = (e) => {
        setSearchTerm('')
        clearButtonRef.current.value = ''
    }

    return (
        <div className={styles.searchBox}>
            <input ref={clearButtonRef} onChange={ handleChange } type="text" placeholder="Search" />
            <span onClick={handleClick}>
                <IoMdCloseCircle size={30} />
            </span>
        </div>
    )

}