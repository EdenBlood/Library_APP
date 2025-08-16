import { createRoot } from "react-dom/client";
import "./index.css";
import { BookProvider } from "./context/booksContext";
import { FilterProvider } from "./context/filterContext";
import { UserProvider } from "./context/userContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <BookProvider>
    <FilterProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </FilterProvider>
  </BookProvider>
);
