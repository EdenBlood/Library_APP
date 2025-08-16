import BooksService from "@/services/BooksService";
import type { BookInfo, BookItem } from "@/types/index.types";
import { useEffect, useState } from "react";

interface UseGetBookState {
  bookId: BookInfo["ISBN"];
}

export function useGetBook({ bookId }: UseGetBookState) {
  const [book, setBook] = useState<BookItem>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBookFunction = async () => {
      try {
        const book = await BooksService.getBook(bookId);
        setBook(book);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    if (bookId) {
      getBookFunction();
    }
  }, [bookId]);

  return { book: book ? book.book : null, isError, isLoading };
}
