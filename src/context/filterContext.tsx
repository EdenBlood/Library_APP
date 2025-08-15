import { useState, type ReactNode } from "react";
import { createContext } from "react";

interface FilterState {
  genereFilter: string;
  setGenereFilter: (genere: string) => void;
  pageFilter: string;
  setPageFilter: (pages: string) => void
}

export const FilterContext = createContext<FilterState | null>(null);

export const FilterProvider = ({children}: {children: ReactNode}) => {
  const [ genereFilter, setGenereFilter ] = useState("Todos los géneros")
  const [ pageFilter, setPageFilter ] = useState("2000");

  return (
    <FilterContext.Provider value={{
      genereFilter, setGenereFilter,
      pageFilter, setPageFilter
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}