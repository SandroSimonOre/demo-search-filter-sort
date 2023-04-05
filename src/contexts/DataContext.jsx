import { createContext, useContext, useReducer } from 'react';
import { courses } from '../data/courses';

const DataContext = createContext(null);

const DataDispatchContext = createContext(null);

export function DataProvider({ children }) {

    const [data, dispatch] = useReducer(
        dataReducer,
        courses
    );

    return (
        <DataContext.Provider value={data}>
            <DataDispatchContext.Provider value={dispatch}>
                {children}
            </DataDispatchContext.Provider>
        </DataContext.Provider>
    );
}

export function useData() {
  return useContext(DataContext);
}

export function useDataDispatch() {
  return useContext(DataDispatchContext);
}

function dataReducer(data, action) {

    switch (action.type) {
    
        case 'reset': {
            return courses;
        }
        
        case 'filterByCategory': {
            return data.filter(d => d.category === action.category);
        }
        
        case 'sortByCategory': {
            return data.sort((a, b) => a.category - b.category);
        }
        
        case 'sortByTitle': {
            console.log('ordenando...')
            return data.sort((a, b) => (a.title > b.title ? 1 : -1));
        }
        
        default: {
            throw Error('Unknown action: ' + action.type);
        }

    }

}