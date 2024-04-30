import React from 'react'
import css from "./Layout.module.css"
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className={css.container}>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
