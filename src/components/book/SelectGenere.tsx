import { useFilterContext } from "@/hooks/useFilterContext";
import { translate } from "@/i18n/index";

const generes: string[] = ["Ciencia ficción", "Terror", "Fantasía", "Zombies"]

export function SelectGenere() {
  const { genereFilter, setGenereFilter } = useFilterContext()
  
  const handleChangeGenereFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenereFilter(e.target.value)
  }
  return (
    <>
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
    </>
  )
}