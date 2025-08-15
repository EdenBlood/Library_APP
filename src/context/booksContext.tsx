import { useGetBooks } from "@/hooks/useGetBooks";
import type { BookItem } from "@/types/index.types";
import { createContext, type ReactNode } from "react";

export interface BooksState {
  books: BookItem[];
}


export const BooksContext = createContext<BooksState | null>(null);

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