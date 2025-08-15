import type { BookItem } from "@/types/index.types"
import { BookCard } from "./BookCard"

interface BookListProps {
  books: BookItem[]
}

export function BookList({ books }: BookListProps) {
  return (
    <>
      {
        books.map(({ book }) => (
          <BookCard book={ book } key={ book.ISBN } />
        ))
      }
    </>
  )
}