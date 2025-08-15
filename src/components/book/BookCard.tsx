import type { BookInfo } from "@/types/index.types"
import { genereColors } from "@/colors/index"

interface BookCardProps {
  book: BookInfo
}

export function BookCard({book}: BookCardProps) {
  const handleClickBook = () => {
    console.log(book)
  }
  const genereFormat = book.genere.replaceAll(" ", "_")
  
  return (
    <article className="">
      <button onClick={handleClickBook} type="button" className="flex flex-col w-full h-full bg-black rounded-xl overflow-hidden scale-100 hover:scale-110 transform duration-300 group cursor-pointer">
        <picture className="h-56 overflow-hidden flex items-center justify-center">
          <img className="object-center object-cover w-full h-full" src={book.cover} alt={book.title} />
        </picture>
        <div className="p-1">
          <h2 className={`${genereColors[genereFormat]} text-slate-100 text-md font-bold truncate transition-colors duration-300`} title={book.title}>{book.title}</h2>
          <p className="text-xs font-semibold"><span className={`${genereColors[genereFormat]}`}>{book.genere}</span>{' '} - {book.year}</p>
        </div>
      </button>
    </article>
  )
} 