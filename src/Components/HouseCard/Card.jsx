import React from 'react'
import css from "./Card.module.css"

const Card = ({ image, type, icon1, location, icon2, price }) => {
    return (
        <div className={css.container}>
            <div className={css.column}>
                <div className={css.houseimage}>
                    <img src={image} alt="house" />
                    <i class="uil uil-heart"></i>
                </div>
                {/* info */}
                <div className={css.info}>
                    <span>{type}</span>

                    <div className={css.row}>
                        {icon1}
                        <span>{location}</span>
                    </div>
                    <div className={css.row}>
                        {icon2}
                        <span>{price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
