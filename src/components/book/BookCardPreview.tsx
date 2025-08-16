import { genereColors } from "@/colors/index";
import { bookMarkIcon, bookMarkSlashIcon } from "../icons/icons";
import type { BookInfo, BookItem } from "@/types/index.types";
import { useUserContext } from "@/hooks/useUserContext";
import { useState } from "react";
import { translate } from "@/i18n/index";

interface BookCardPreviewProps {
  book: BookInfo;
}

export function BookCardPreview({ book }: BookCardPreviewProps) {
  const { readingList, setReadingList } = useUserContext();
  //* Revisa si ese libro esta en la lista de lectura
  const [isReadingList, setIsReadingList] = useState<boolean>(
    readingList.some((thisBook: BookItem) => thisBook.book.ISBN === book.ISBN)
  );

  const handleClickBook = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    //* Hacemos que no se propague le click y luego prevenimos que no nos redirija con el preventDefault.
    e.stopPropagation();
    e.preventDefault();

    //* si ya existe en la lista de lectura
    if (isReadingList) {
      setReadingList((prev) => {
        const newList = prev.filter(
          (thisBook) => thisBook.book.ISBN !== book.ISBN
        );
        return newList;
      });
      setIsReadingList(false);
      return;
    }

    //* Si no existe en la lista de lectura;
    setReadingList((prev) => {
      const newList = [...prev, { book }];
      return newList;
    });
    setIsReadingList(true);
  };

  //* formato para obtener el color del genero.
  const genereFormat = book.genere.replaceAll(" ", "_");
  return (
    <>
      <div className="h-56 w-full overflow-hidden flex items-center justify-center relative">
        <picture>
          <img
            className="object-center object-cover w-full h-full"
            src={book.cover}
            alt={book.title}
          />
        </picture>

        <button
          onClick={handleClickBook}
          title={
            isReadingList
              ? translate("REMOVE_READING_LIST")
              : translate("ADD_READING_LIST")
          }
          className={`absolute top-0 right-0 p-2 cursor-pointer z-10 transition-colors duration-300 ${
            isReadingList
              ? "text-red-600 hover:text-red-500"
              : "text-slate-100 hover:text-white"
          }`}
        >
          <span className="drop-shadow-sm drop-shadow-gray-800/70">
            {isReadingList ? bookMarkSlashIcon() : bookMarkIcon()}
          </span>
        </button>
      </div>
      <div className="p-1">
        <h2
          className={`${genereColors[genereFormat]} text-slate-100 text-md font-bold truncate transition-colors duration-300`}
          title={book.title}
        >
          {book.title}
        </h2>
        <p className="text-xs font-semibold">
          <span className={`${genereColors[genereFormat]}`}>{book.genere}</span>{" "}
          - {book.year}
        </p>
      </div>
    </>
  );
}
