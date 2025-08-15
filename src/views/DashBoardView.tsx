import { translate } from "../i18n";
import { BookList } from "@/components/book/BookList";
import { Filters } from "@/components/book/Filters";
import { useBookContext } from "@/hooks/useBookContext";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useEffect, useState } from "react";

export function DashBoardView() {
  //* Obtenemos los libros disponibles.
  const { books } = useBookContext()
  const [ filteredBooks, setFilteredBooks ] = useState(books);
  const { genereFilter, pageFilter } = useFilterContext()

  useEffect(() => {
    setFilteredBooks(books.filter(({ book }) => {
      const matchGenere = genereFilter === "Todos los géneros" || book.genere === genereFilter;
      const matchPages = Number(book.pages) <= Number(pageFilter);
      return matchGenere && matchPages;
    }))
  }, [genereFilter, pageFilter, books])
  
  return (
    <>
      <main className="max-w-5xl mx-auto bg-slate-800 min-h-screen flex flex-col gap-5">
        <h1 className="font-bold text-4xl text-center">{translate("WELCOME")}</h1>

        <section className="w-full flex justify-between">
          {/* Filters */}
          <h2 className="font-bold">{translate("AVAILABLE_BOOKS")}</h2>

          <Filters />

        </section>
        
        <section className="grid grid-cols-6 gap-4">

          <BookList books={filteredBooks} />
        </section>
      </main>
    </>
  )
}