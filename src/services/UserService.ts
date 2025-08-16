import type { BookItem } from "@/types/index.types";
import { STORAGE_TOKEN } from "../constants";
import { getLocalStorage, setLocalStorage } from "../utils";

export default {
  setStorage: (readingList: BookItem[]) => {
    setLocalStorage({ item: readingList, token: STORAGE_TOKEN });
  },

  getStorage: () => {
    return getLocalStorage({ token: STORAGE_TOKEN });
  },
};
