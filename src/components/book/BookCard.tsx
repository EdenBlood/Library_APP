import type { BookInfo, BookItem } from "@/types/index.types"
import { genereColors } from "@/colors/index"
import { useUserContext } from "@/hooks/useUserContext"
import { useEffect, useState } from "react"
import { bookMarkSlashIcon } from "../icons/icons"

interface BookCardProps {
  book: BookInfo
}

export function BookCard({book}: BookCardProps) {
  const { readingList, setReadingList } = useUserContext()
  const [ isReadingList, setIsReadingList ] = useState<boolean>(readingList.some(
    (thisBook:BookItem) => thisBook.book.ISBN === book.ISBN )
  )
  
  const handleClickBook = () => {
    // si ya existe en la lista de lectura
    if (isReadingList) {
      setReadingList(prev => {
        const newList = prev.filter(thisBook => thisBook.book.ISBN !== book.ISBN)
        return newList;
      })
      setIsReadingList(false);
      return
    }
    
    // Si no existe en la lista de lectura;
    setReadingList(prev => {
      const newList = [...prev, {book}];
      return newList;
    })
    setIsReadingList(true);
  }

  useEffect(() => {
    console.log(readingList)
  }, [readingList])
  
  const genereFormat = book.genere.replaceAll(" ", "_")
  
  return (
    <article className="">
      <button 
        onClick={handleClickBook} 
        type="button" 
        className={`flex flex-col w-full h-full bg-black rounded-xl overflow-hidden scale-100 hover:scale-110 transform duration-300 group cursor-pointer relative ${isReadingList && "opacity-30"}`}
      >
        
        <div className="h-56 w-full overflow-hidden flex items-center justify-center relative">
          <picture>
            <img className="object-center object-cover w-full h-full" src={book.cover} alt={book.title} />
          </picture>
          
          <div className={`absolute flex items-center justify-center w-full h-full text-red-500 z-10 transition-opacity duration-300 ${isReadingList ? "opacity-150" : "opacity-0" }`}>{bookMarkSlashIcon()}</div>
        </div>
        <div className="p-1">
          <h2 className={`${genereColors[genereFormat]} text-slate-100 text-md font-bold truncate transition-colors duration-300`} title={book.title}>{book.title}</h2>
          <p className="text-xs font-semibold"><span className={`${genereColors[genereFormat]}`}>{book.genere}</span>{' '} - {book.year}</p>
        </div>
        
      </button>
    </article>
  )
} 