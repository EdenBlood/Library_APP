import { BookList } from "@/components/book/BookList";
import { Filters } from "@/components/book/Filters";
import { NavBooks } from "@/components/book/NavBooks";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useUserContext } from "@/hooks/useUserContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ReadingListView() {
  //* Obtenemos los libros disponibles.
  const { readingList } = useUserContext();
  const [filteredBooks, setFilteredBooks] = useState(readingList);
  const { genereFilter, minPageFilter, maxPageFilter } = useFilterContext();

  useEffect(() => {
    setFilteredBooks(
      readingList.filter(({ book }) => {
        const matchGenere =
          genereFilter === "Todos los géneros" || book.genere === genereFilter;

        const matchPages =
          book.pages <= maxPageFilter && book.pages >= minPageFilter;
        return matchGenere && matchPages;
      })
    );
  }, [genereFilter, maxPageFilter, minPageFilter, readingList]);

  return (
    <>
      <section className="w-full flex justify-between items-center gap-4 py-4 px-6 bg-black">
        <NavBooks />

        <Filters />
      </section>

      {readingList.length === 0 ? (
        <div className="w-full h-[50vh] flex flex-col items-center justify-center gap-2">
          <h2 className="text-slate-200 text-4xl">
            No hay Libros en la lista de Lectura
          </h2>
          <p className="text-slate-200 text-xl">
            Agrega libros a la lista de Lectura{" "}
            <Link
              className="text-indigo-400 hover:text-indigo-500 transition-colors duration-300"
              to={"/"}
            >
              Aquí
            </Link>
          </p>
        </div>
      ) : (
        <BookList books={filteredBooks} />
      )}
    </>
  );
}
