import React from 'react'
import css from "./Rounded.module.css"

const Rounded = ({ icon,onClick }) => {
    return (
        <div className={css.container} onClick={onClick}>
            {icon}
        </div>
    )
}

export default Rounded
