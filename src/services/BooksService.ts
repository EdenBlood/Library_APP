import books from '@/mocks/books.json'
import type { BookItem } from '@/types/index.types';



export default {
  getBooks: async (): Promise<BookItem[]> => {
    return await books.library;
  }
}