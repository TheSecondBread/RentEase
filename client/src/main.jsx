import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Intro from './components/Intro.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Profile from './components/Profile.jsx'
import Createprop from './components/Createprop.jsx'
import Myprop from './components/Myprop.jsx'
import Allprops from './components/Allprops.jsx'

const route =createBrowserRouter([
  {path:"/index",element:<App></App>},
  {path:"/",element:<Intro></Intro>},
  {path:"/home",element:<Home></Home>},
  {path:"/about",element:<About></About>},
  {path:"/profile",element:<Profile></Profile>},
  {path:"/list",element:<Createprop></Createprop>},
  {path:"/myprop",element:<Myprop></Myprop>},
  {path:"/browse",element:<Allprops></Allprops>}
]
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {route}/>
    
  </React.StrictMode>,
)
