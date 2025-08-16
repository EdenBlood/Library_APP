import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { type BookItem, type Context } from "@/types/index.types";
import UserService from "@/services/UserService";

export interface UserState {
  readingList: BookItem[];
  setReadingList: Dispatch<SetStateAction<BookItem[]>>;
}

export const UserContext = createContext<UserState | null>(null);

export const UserProvider = ({ children }: Context) => {
  const [readingList, setReadingList] = useState<BookItem[]>(
    UserService.getStorage()
  );

  useEffect(() => {
    UserService.setStorage(readingList);
  }, [readingList]);

  return (
    <UserContext.Provider
      value={{
        readingList,
        setReadingList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
