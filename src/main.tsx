import { createRoot } from 'react-dom/client'
import './index.css'
import { DashBoardView } from '@/views/DashBoardView'
import { GlobalLayout } from '@/layouts/GlobalLayout'
import { MainLayout } from '@/layouts/MainLayout'
import { BookProvider } from './context/booksContext'
import { FilterProvider } from './context/filterContext'

createRoot(document.getElementById('root')!).render(
  <BookProvider>
    <FilterProvider>
      <GlobalLayout>
        <MainLayout>
          <DashBoardView />
        </MainLayout>
      </GlobalLayout>
    </FilterProvider>
  </BookProvider>
)
