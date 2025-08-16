import { useGetBook } from "@/hooks/useGetBook";
import { Link, Navigate, useParams } from "react-router-dom";
import { translate } from "../i18n";

export function BookView() {
  const params = useParams();
  const bookId = params.bookId!;

  const { book, isError, isLoading } = useGetBook({ bookId });

  if (isLoading) return <div>Cargando...</div>;
  if (!book || isError) return <Navigate to={"/"} />;
  return (
    <>
      <div className="flex gap-10">
        <picture className="w-72 h-full rounded-xl overflow-hidden">
          <img src={book.cover} alt={`Imagen de el libro ${book.title}`} />
        </picture>

        <div className="flex flex-col justify-center space-y-1">
          {translate("REMOVE_READING_LIST")} {translate("ADD_READING_LIST")}
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="font-bold text-lg">
            {translate("AUTHOR_NAME")}:{" "}
            <span className="font-normal">{book.author.name}</span>
          </p>
          <p className="font-bold text-lg">
            {translate("GENERE")}:{" "}
            <span className="font-normal">{book.genere}</span>
          </p>
          <p className="font-bold text-lg">
            {translate("YEAR")}:{" "}
            <span className="font-normal">{book.year}</span>
          </p>
          <p className="font-bold text-lg">
            {translate("SYNOPSIS")}:{" "}
            <span className="font-normal">{book.synopsis}</span>
          </p>
          {book.author.otherBooks.length > 0 && (
            <ul className="list-disc list-inside font-bold text-lg">
              {translate("AUTHOR_ANOTHER_BOOKS")} {book.author.name}:{" "}
              {book.author.otherBooks.map((bookName) => (
                <li className="font-normal text-md" key={bookName}>
                  <Link
                    className="text-indigo-400 hover:text-indigo-500 transition-colors duration-300"
                    to={`/book/${bookName}`}
                  >
                    {bookName}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
