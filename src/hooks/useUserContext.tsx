import { UserContext, type UserState } from "@/context/userContext"
import { useContext } from "react"

export function useUserContext(): UserState {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext debe usarse dentro de un UserProvider')
  
  return context;
}