// hooks/useGetBooks.ts
import { useEffect, useState } from "react";
import BooksService from "@/services/BooksService";
import type { BookItem } from "@/types/index.types";

export function useGetBooks() {
  const [books, setBooks] = useState<BookItem[]>([]);

  useEffect(() => {
    BooksService.getBooks().then(book => setBooks(book));
  }, []);

  return books;
}