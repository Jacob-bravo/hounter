import React, { useState } from 'react'
import css from "./BottomNavigation.module.css"
import { Navigation } from '../../Data'

const BottomNavigation = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className={css.container}>
            <div className={css.items}>
                {
                    Navigation.map((link, index) => {
                        return <div className={index === 0 ? css.activeIndex : css.row} key={index}>
                            {link.icon}
                            <span>{link.title}</span>
                        </div>
                    })
                }
            </div>


        </div>
    )
}

export default BottomNavigation
