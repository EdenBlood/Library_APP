import { useFilterContext } from "@/hooks/useFilterContext";
import { translate } from "@/i18n/index";
import { getTrackBackground, Range } from "react-range";



export function InputPagesRange() {
  const { maxPageFilter, setMaxPageFilter, minPageFilter, setMinPageFilter } = useFilterContext()

  const MIN = 1;
  const MAX = 2000;
  const STEP = 10;
  return (
    <>
      <label className="font-bold" htmlFor="pages">{translate("LABEL_PAGES")}</label>

      <div className="w-50">
        <Range
          values={[Number(minPageFilter), Number(maxPageFilter)]}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => {
            setMinPageFilter(values[0]);
            setMaxPageFilter(values[1]);
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-2 rounded-lg"
              style={{
                background: getTrackBackground({
                  values: [Number(minPageFilter), Number(maxPageFilter)],
                  colors: ["#ccc", "#a855f7", "#ccc"],
                  min: MIN,
                  max: MAX
                })
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              key={props.key}
              className="h-5 w-5 bg-purple-500 border-2 border-white rounded-full shadow-lg flex items-center justify-center relative"
            >
              <div className="absolute -top-7 text-xs font-bold bg-gray-800 text-white p-1 rounded">
                {index === 0 ? Number(minPageFilter) : Number(maxPageFilter)}
              </div>
            </div>
          )}
        />
      </div>
    </>
  )
}