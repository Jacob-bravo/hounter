import React, { useState } from 'react'
import css from "./Filters.module.css"

const Filters = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`${css.bottomSheet} ${isOpen ? css.open : ''}`}>
            <div className={css.column}>
                <span>Filter By</span>

                <div className={css.options}>
                    <select>
                        <option value="Low">Lowest Rent</option>
                    </select>
                    <select>
                        <option value="A">Gate A</option>
                    </select>
                    <select>
                        <option value="Type">Bedsitter</option>
                    </select>
                    <select>
                        <option value="Range">Price Range</option>
                    </select>
                </div>

                <button>Apply filters</button>
            </div>
        </div>
    )
}

export default Filters
