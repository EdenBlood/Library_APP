import { createBrowserRouter } from "react-router-dom";
import { GlobalLayout } from "./layouts/GlobalLayout";
import { MainLayout } from "./layouts/MainLayout";
import { DashBoardView } from "./views/DashBoardView";
import { ReadingListView } from "./views/ReadingListView";
import { BookView } from "./views/BookView";

export const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        element: <MainLayout />,
        path: "/",
        children: [
          {
            element: <DashBoardView />,
            index: true,
          },
          {
            element: <ReadingListView />,
            path: "/reading-list",
          },
          {
            element: <BookView />,
            path: "/book/:bookId",
          },
        ],
      },
    ],
  },
]);
