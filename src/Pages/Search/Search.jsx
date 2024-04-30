import React from 'react'
import css from "./Search.module.css"

const Search = () => {
    const houseUrl = 'https://images.unsplash.com/photo-1630699376106-d550afb865bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVtcHR5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D'
    const Card = ({ room, location, price }) => {
        return <div className={css.cardContainer}>
            <div className={css.image}>
                <img src={houseUrl} alt="house" />
                <i class="uil uil-heart"></i>
            </div>
            <div className={css.info}>
                <span>{room}</span>
                <span>{location}</span>
                <span>{price}</span>
                <div className={css.more}>
                    <div className={css.circle}>
                        <i class="uil uil-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    }

    const Lists = [
        <Card room={'One Bedroom'} price={'7,000 KSH'} location={'Gate A'} />,
        <Card room={'Bedsitter'} price={'7,000 KSH'} location={'Gate B'} />,
        <Card room={'Bedsitter'} price={'7,000 KSH'} location={'Gate C'} />,
        <Card room={'Bedsitter'} price={'7,000 KSH'} location={'Gate D'} />
    ];
    return (
        <div className={css.container}>
            <div className={css.rowHeader}>
                <span>Filter results</span>
                <span>125 ads</span>
            </div>
            <div className={css.cards}>
                {
                    Lists.map((rom, index) => {
                        return <div className={css.card} key={index}>
                            {rom}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Search
