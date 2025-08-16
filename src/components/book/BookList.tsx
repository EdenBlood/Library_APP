import type { BookItem } from "@/types/index.types";
import { BookCard } from "./BookCard";

interface BookListProps {
  books: BookItem[];
}

export function BookList({ books }: BookListProps) {
  return (
    <section className="grid grid-cols-6 gap-4">
      {books.map(({ book }) => (
        <BookCard book={book} key={book.ISBN} />
      ))}
    </section>
  );
}
