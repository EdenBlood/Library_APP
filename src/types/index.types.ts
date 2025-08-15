import type { ReactNode } from "react";

export interface Layouts {
  children: ReactNode
}

interface Author {
  name: string;
  otherBooks: string[];
}

export interface BookInfo {
  title: string;
  pages: number;
  genere: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author
}

export interface BookItem {
  book: BookInfo;
}

export interface BooksData {
  library: BookItem[];
}