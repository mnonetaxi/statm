import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import BrowseAll from './pages/BrowseAll';
import BrowseBrands from './pages/BrowseBrands'
import AboutPage from './pages/AboutPage';
import ManPage from './pages/ManPage';
import WomenPage from './pages/WomenPage';
import ContactPage from './pages/ContactPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/browseAll",
    element: <BrowseAll/>,
  },
  {
    path: "/browseBrands",
    element: <BrowseBrands/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/men",
    element: <ManPage/>,
  },
  {
    path: "/women",
    element: <WomenPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
