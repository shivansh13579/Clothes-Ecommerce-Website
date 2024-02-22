import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx'
import Product1 from './pages/Product/Product1.jsx';
import "./main.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

const Layout = () =>{
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
           path:"/",
           element: <Home/>
        },

        {
          path:"/products/:id",
          element: <Products/>
        },
        {
          path:"/product/:id",
          element: <Product1/>
        },
      ]
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
