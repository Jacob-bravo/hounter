import React from 'react'
import css from "./RowListing.module.css"

const RowListing = () => {
    const houseUrl = 'https://images.unsplash.com/photo-1630699376106-d550afb865bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVtcHR5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D'
    const Card = ({ room, price }) => {
        return <div className={css.cardContainer}>
            <div className={css.image}>
                <img src={houseUrl} alt="house" />
                <i class="uil uil-heart"></i>
            </div>
            <div className={css.info}>
                <span>{room}</span>
                <span>{price}</span>
            </div>
        </div>
    }
    const Lists = [
        <Card room={'Bedsitter'} price={'7,000 KSH'} />,
        <Card room={'Bedsitter'} price={'7,000 KSH'} />,
        <Card room={'Bedsitter'} price={'7,000 KSH'} />,
        <Card room={'Bedsitter'} price={'7,000 KSH'} />
    ];
    return (
        <div className={css.container}>
            <div className={css.rowHeader}>
                <span>Exclusive Listing</span>
                <span>View more</span>
            </div>
            <div className={css.cards}>
                {
                    Lists.map((room, index) => {
                        return <div className={css.roomtype} key={index}>
                            {
                                room
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default RowListing
