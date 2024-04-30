import React, { useState } from 'react'
import css from "./Navbar.module.css"
import { Gate, Houses, PriceRange } from '../../Data/index'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false)
  const [keyword, setKeyword] = useState("");
  const Search = (e) => {
    setKeyword(e.target.value);
    if (keyword.length > 1) {
      navigate(`/search`)
    } else {
      navigate(`/`)
    }

  }
  return (
    <div className={css.container}>

      {/* header */}
      <div className={css.row}>
        <span><span className={css.initial}>H</span>ounter</span>
        <i class="uil uil-bars"></i>
      </div>

      {/* filters */}
      <div className={css.filters}>
        {/* Search */}
        <div className={css.searchArea}>
          <input type="text" placeholder='I am looking for...' value={keyword} onChange={(e) => Search(e)} />
          <div className={css.btn} onClick={() => {
            setShowFilters(prevState => !prevState);
          }}>
            {
              !showFilters ? <i class="uil uil-sliders-v-alt" ></i> : <i class="uil uil-times"></i>
            }
          </div>
        </div>
        {/* Filters */}
        <div className={showFilters ? css.active : css.nonActive}>
          <select >
            {
              Gate.map((gate, index) => {
                return <option value={gate} key={index}>{gate}</option>
              })
            }
          </select>
          <select >
            {
              Houses.map((house, index) => {
                return <option value={house} key={index}>{house}</option>
              })
            }
          </select>
          <select >
            {
              PriceRange.map((range, index) => {
                return <option value={range} key={index}>{range}</option>
              })
            }
          </select>
        </div>

      </div>


    </div>
  )
}

export default Navbar
