import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// dependencies
import {createBrowserRouter, Outlet, RouterProvider, ScrollRestoration} from 'react-router-dom'

// import tanstack query
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// components
import App from './App.jsx'
import Layout from './Layout/Layout.jsx'
import Products from './Pages/Products/Products.jsx'
import Category from './Pages/Category/Category.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import Cart from  './Pages/Cart/Cart.jsx'
import Orders from './Pages/Orders/Orders.jsx'
import Success from './Pages/Success/Success.jsx'
import Cancel from './Pages/Cancel/Cancel.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'
import Blog from './Pages/Blog/Blog.jsx'
import Favorite from './Pages/Favourite/Favourite.jsx'
import Checkout from './Pages/Blog/CheckOut/Checkout.jsx';

// routerLayout
const RouterLayout = () => {
  return(
    <Layout>
<ScrollRestoration />
<Outlet />
    </Layout>
  )
}


const router = createBrowserRouter([{
  path: '/',
  element: <RouterLayout />,
  children: [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/products',
      element: <Products />
    },
    {
      path: '/product/:id',
      element: <Products />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/category',
      element: <Category />
    },
    {
      path: '/category/:id',
      element: <Category />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/favorite',
      element: <Favorite />
    },
    {
      path: '/orders',
      element: <Orders />
    },
    // {
    //   path: '/success',
    //   element: <Success />
    // },
    // {
    //   path: '/cancel',
    //   element: <Cancel />
    // },
    {
      path:'/checkout',
      element:<Checkout />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
}])


//  custom configuration
// const client = new QueryClient()

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    
    <RouterProvider router={router} />
     
  // </StrictMode>,

)
