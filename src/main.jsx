import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error/Error'
import MainLayout from './components/MainLayout/MainLayout'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import BookDetail from './components/BookDetail/BookDetail'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch(`/booksData.json`)
      },
      {
        path: '/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path: '/read',
        element:<Dashboard></Dashboard>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
