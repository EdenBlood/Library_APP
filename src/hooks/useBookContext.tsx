import { BooksContext } from "@/context/booksContext";
import { useContext } from "react";

export function useBookContext() {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("useBookContext debe usarse dentro de un BookProvider");
  };
  return context;
} 