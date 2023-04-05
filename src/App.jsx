// https://contactmentor.com/checkbox-list-react-js-example/

import { useEffect } from "react"
import { useData } from "./contexts/DataContext"
import { useDataDispatch } from "./contexts/DataContext"

export default function App() {
  /* const checkList = [
    {id:'python', title: 'Python 3'},
    {id: 'powerbi', title: 'Power BI' },
    {id: 'databases', title: 'Databases'}
  ]  */
  
  const data = useData()
  const dispatch = useDataDispatch()
  //console.log(data)
  //const [selectedVideos, setSelectedVideos] = useState(videos)
  //const [selectedCategories, setSelectedCategories] = useState([])

  /* const handleCheck = (event) => {
    let updatedList = [...selectedCategories];
    if (event.target.checked) {
      updatedList = [...selectedCategories, event.target.value];
    } else {
      updatedList.splice(selectedCategories.indexOf(event.target.value), 1);
    }
    setSelectedCategories(updatedList);
  }; */

  /* useEffect(()=> {
    console.log(selectedCategories)
  }, [selectedCategories])
   */

  useEffect(()=> {
    console.log(data)
  }, [data])
  return (
    <>
      {
        data.map(c => (
          <span key={c.id}>
            <p>{c.title}</p>
          </span>
        ))
      }
      <button onClick={() => dispatch({type: 'sortByTitle'})}>Ordenar</button>
      <button onClick={() => console.log(data)}>Mostrar estado</button>
    </>
  )
}

/*
<section className='border flex flex-col w-4/5'>
        
            
        <div className="flex justify-between">
          <div>
            <input type="text" className="bg-black text-white border" placeholder="Buscar" />
          </div>
          <div>
            <button className="border">Buscar</button>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p>100 resultados</p>
          </div>

          <div>
            <span>Ordenado por:</span>
            <span>Popular</span>
          </div>
        </div>
        
        <div className="flex p-2 gap-6">
          {
            categories.map(c => (
              <span
                key={c.id}
                className={`border p-2 rounded-lg ${selectedCategories?.find(sc => c.id === sc.id) && 'bg-white text-black' }`}
                onClick={() => handleCategories(c)}
              >
                {c.title}
              </span>
            ))
          }
          
        </div>      

      
      </section>
*/