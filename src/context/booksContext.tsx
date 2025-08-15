import { useGetBooks } from "@/hooks/useGetBooks";
import type { BookItem } from "@/types/index.types";
import { createContext, type ReactNode } from "react";

type BooksContextType = {
  books: BookItem[];
}


export const BooksContext = createContext<BooksContextType>({books: []});

interface BookProviderProps {
  children: ReactNode
}

export const BookProvider = ({children}: BookProviderProps) => {

  const books = useGetBooks();

  return (
    <BooksContext.Provider 
      value={{
        books,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}