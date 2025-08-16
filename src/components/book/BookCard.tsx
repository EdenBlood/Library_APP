import type { BookInfo } from "@/types/index.types";
import { BookCardPreview } from "./BookCardPreview";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: BookInfo;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <article className="">
      <Link
        to={`/book/${book.ISBN}`}
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col w-full h-full bg-black rounded-xl overflow-hidden scale-100 hover:scale-110 transform duration-300 group cursor-pointer relative`}
      >
        <BookCardPreview book={book} />
      </Link>
    </article>
  );
}
