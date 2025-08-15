import { FilterContext } from "@/context/filterContext";
import { useContext } from "react";


export function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) throw new Error('useFiltersContext debe usarse dentro de un FiltersProvider')
  return context;
}