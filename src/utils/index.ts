import type { BookItem } from "@/types/index.types";

interface SetLocalStorageProps {
  item: BookItem[];
  token: string;
}

interface GetLocalStorageProps {
  token: string;
}

export const setLocalStorage = ({ item, token }: SetLocalStorageProps) => {
  window.localStorage.setItem(token, JSON.stringify(item));
};

export const getLocalStorage = ({ token }: GetLocalStorageProps) => {
  const storage = window.localStorage.getItem(token);
  if (storage === null) return [];
  return JSON.parse(storage) as BookItem[];
};
