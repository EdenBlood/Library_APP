import { BookList } from "@/components/book/BookList";
import { Filters } from "@/components/book/Filters";
import { NavBooks } from "@/components/book/NavBooks";
import { faceFrownIcon } from "@/components/icons/icons";
import { useFilterContext } from "@/hooks/useFilterContext";
import { useUserContext } from "@/hooks/useUserContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { translate } from "../i18n";

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
          <div className="text-slate-200">{faceFrownIcon()}</div>
          <h2 className="text-slate-200 text-4xl">
            {translate("HAVE_NOT_BOOKS")}
          </h2>
          <p className="text-slate-200 text-xl">
            {translate("ADD_BOOKS_TO_READING_LIST")}{" "}
            <Link
              className="text-indigo-400 hover:text-indigo-500 transition-colors duration-300"
              to={"/"}
            >
              {translate("HERE")}
            </Link>
          </p>
        </div>
      ) : (
        <BookList books={filteredBooks} />
      )}
    </>
  );
}
