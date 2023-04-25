import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout, {
  handler as rootHandler,
} from './components/Pages/RootLayout'
import Products from './components/Pages/Products'
import Cart from './components/Pages/Cart'
import Error from './components/Pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    loader: rootHandler,
    children: [
      {
        index: true,
        element: <Products />,
      },
      { path: 'cart', element: <Cart /> },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
