import { useState, type ReactNode } from "react";
import { createContext } from "react";

export interface FilterState {
  genereFilter: string;
  setGenereFilter: (genere: string) => void;
  maxPageFilter: number;
  setMaxPageFilter: (pages: number) => void
  minPageFilter: number;
  setMinPageFilter: (pages: number) => void
}

export const FilterContext = createContext<FilterState | null>(null);

export const FilterProvider = ({children}: {children: ReactNode}) => {
  const [ genereFilter, setGenereFilter ] = useState("Todos los géneros")
  const [ maxPageFilter, setMaxPageFilter ] = useState<number>(2000);
  const [ minPageFilter, setMinPageFilter ] = useState<number>(1);


  return (
    <FilterContext.Provider value={{
      genereFilter, setGenereFilter,
      maxPageFilter, setMaxPageFilter,
      minPageFilter, setMinPageFilter
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}