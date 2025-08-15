import { useFilterContext } from "@/hooks/useFilterContext";
import { translate } from "@/i18n/index";

const generes: string[] = ["Ciencia ficción", "Terror", "Fantasía", "Zombies"]

export function Filters() {
  const { genereFilter, pageFilter, setGenereFilter, setPageFilter } = useFilterContext()

  const handleChangeGenereFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenereFilter(e.target.value)
  }
  
  const handleChangePagesFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageFilter(e.target.value);
  }
  
  return (
    <>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row items-center gap-5">
          <label 
            className="font-bold" 
            htmlFor="genere"
          >{translate("LABEL_GENERE")}</label>
          <select 
            className="bg-gray-800 outline-none px-2 py-1 rounded-xl cursor-pointer focus:outline-none border border-slate-400/50" 
            name="genere" 
            id="genere" 
            onChange={handleChangeGenereFilter} 
            value={genereFilter}
          >
            <option value={"Todos los géneros"}>Todos los géneros</option>
            {generes.map((genere) => (
              <option key={genere} value={genere}>{genere}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-row items-center gap-5">
          <label className="font-bold" htmlFor="pages">{translate("LABEL_PAGES")}</label>

          <div className="relative w-40">

            <div
            className="absolute -top-6 left-0 transform -translate-x-1/2 text-sm font-bold bg-gray-800 text-white px-2 py-1 rounded"
            style={{
              left: `${(Number(pageFilter) / 2000) * 100}%`, // posición proporcional
            }}
          >
            {pageFilter}
          </div>
            <input 
              name="pages" 
              id="pages" 
              type="range"  
              
              min={0} 
              max={2000} 
              step={10}
              value={pageFilter} 
              onChange={handleChangePagesFilter}
              className="w-full appearance-none bg-gray-500 h-2 rounded-lg cursor-pointer accent-purple-500"
            />
          </div>
        </div>
      </div>
    </>
  )
}