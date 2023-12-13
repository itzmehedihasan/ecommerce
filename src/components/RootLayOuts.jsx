import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Layout Page/Navbar'
import Footer from './Layout Page/Footer'
import SearchNav from './Layout Page/SearchNav'

function RootLayOuts() {
  //                 npm run dev

  return (
<>
   <Navbar/>
   <SearchNav/>
   <Outlet/>
   <Footer/>
</>
  )
}

export default RootLayOuts
  //                 npm run dev
