import React, { useState } from 'react'
import css from "./Home.module.css"
import { Gate, Houses, PriceRange } from '../../Data/index'
import RowListing from '../../Components/Listings/RowListing'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  return (
    <div className={css.container}>

      <RowListing />
      <RowListing />
      <RowListing />
      <RowListing />
      <RowListing />
    </div>
  )
}

export default Home
