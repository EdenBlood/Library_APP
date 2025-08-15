import { createContext, useState, type Dispatch, type SetStateAction } from "react";
import { type BookItem, type Context } from "@/types/index.types";

export interface UserState {
  readingList: BookItem[];
  setReadingList: Dispatch<SetStateAction<BookItem[]>>
}

export const UserContext = createContext<UserState | null>(null);

export const UserProvider = ({children}: Context) => {
  const [readingList, setReadingList] = useState<BookItem[]>([])

  return (
    <UserContext.Provider
      value={{
        readingList, setReadingList
      }}
    >
      {children}
    </UserContext.Provider>
  )
}