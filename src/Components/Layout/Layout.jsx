import React from 'react'
import css from "./Layout.module.css"
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Filters from '../FilterPage/Filters'

const Layout = () => {
  return (
    <div className={css.container}>
      <Navbar/>
      <Outlet/>  
      <Filters/>
    </div>
  )
}

export default Layout
