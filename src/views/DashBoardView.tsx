import { BookList } from "@/components/book/BookList";
import { Filters } from "@/components/book/Filters";
import { NavBooks } from "@/components/book/NavBooks";
import { useBookContext } from "@/hooks/useBookContext";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useEffect, useState } from "react";

export function DashBoardView() {
  //* Obtenemos los libros disponibles.
  const { books } = useBookContext();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const { genereFilter, minPageFilter, maxPageFilter } = useFilterContext();

  useEffect(() => {
    setFilteredBooks(
      books.filter(({ book }) => {
        const matchGenere =
          genereFilter === "Todos los géneros" || book.genere === genereFilter;

        const matchPages =
          book.pages <= maxPageFilter && book.pages >= minPageFilter;
        return matchGenere && matchPages;
      })
    );
  }, [genereFilter, maxPageFilter, minPageFilter, books]);

  return (
    <>
      <section className="w-full flex justify-between items-center gap-4 py-4 px-6 bg-black">
        <NavBooks />

        <Filters />
      </section>

      <BookList books={filteredBooks} />
    </>
  );
}
