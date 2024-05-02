import React from 'react'
import css from "./Rounded.module.css"

const Rounded = ({ icon }) => {
    return (
        <div className={css.container}>
            {icon}
        </div>
    )
}

export default Rounded
