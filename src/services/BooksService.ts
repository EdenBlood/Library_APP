import books from "@/mocks/books.json";
import type { BookInfo, BookItem } from "@/types/index.types";

export default {
  getBooks: (): BookItem[] => {
    return books.library;
  },

  getBook: async (bookId: BookInfo["ISBN"]): Promise<BookItem | undefined> => {
    return await books.library.find(
      ({ book }) => book.ISBN.toString() === bookId.toString()
    );
  },
};
