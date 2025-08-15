import { SelectGenere } from "./SelectGenere";
import { InputPagesRange } from "./InputPagesRange";


export function Filters() {
  return (
    <>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row items-center gap-5">
          <SelectGenere />
        </div>

        <div className="flex flex-row items-center gap-5">
          <InputPagesRange/>
        </div>
      </div>
    </>
  )
}