import React, { useEffect, useState } from 'react'

import Product from './components/Product'
import "slick-carousel/slick/slick.css"
import Slider from "react-slick"
import PrevArrow from "./components/PrevArrow"
import NextArrow from "./components/NextArrow"
import "./components/App.css"
import Dropdown from './components/Dropdown'
import axios from 'axios'
import data from "./Api/Data"
import Input from './components/Input'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
}            from "react-router-dom";
import RootLayOuts from './components/RootLayOuts'
import Home from './components/pages/Home'
import Error from './components/pages/Error'
import Sign_up from './components/pages/Sign_up'
import Checkout from './components/pages/Checkout'
import Login from './components/pages/Login'
import Contact from './components/pages/Contact'
import About from './components/pages/About'

  //                 npm run dev

const router = createBrowserRouter(
  createRoutesFromElements(
 <>
   <Route
    path="/"
    element={<RootLayOuts/>}
    >
      <Route
      path="/"
      element={<Home/>}
      >
      </Route>
      <Route
      path="*"
      element={<Error/>}
      >
      </Route>
      <Route
      path="/sign_up"
      element={<Sign_up/>}
      >
      </Route>
      <Route
      path="/checkout"
      element={<Checkout/>}
      >
      </Route>
      <Route
      path="/login"
      element={<Login/>}
      >
      </Route>
      <Route
      path="/contact"
      element={<Contact/>}
      >
      </Route>
      <Route
      path="/about"
      element={<About/>}
      >
      </Route>
      <Route
      path="/shop"
      element={<Product/>}
      >
      </Route>

    </Route>
 </>
  )
)

function App() {
//===================================   return   ========================================//
  return (
    <RouterProvider router={router} />
    )
}

export default App

  //                 npm run dev