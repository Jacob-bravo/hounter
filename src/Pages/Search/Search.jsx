import React from 'react'
import css from "./Search.module.css"
import Card from '../../Components/HouseCard/Card'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigate = useNavigate();
    const imageUrl = 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGVtcHR5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D';
    const Cards = [
        <Card image={imageUrl} type={'Bedsitter'} icon1={<i class="uil uil-location-arrow"></i>} location={'Jkuat, Gate A'} icon2={<i class="uil uil-coins"></i>} price={'KSH 7000'} />,
        <Card image={imageUrl} type={'One Bedroom'} icon1={<i class="uil uil-location-arrow"></i>} location={'Jkuat, Gate A'} icon2={<i class="uil uil-coins"></i>} price={'KSH 7000'} />,
        <Card image={imageUrl} type={'One Bedroom'} icon1={<i class="uil uil-location-arrow"></i>} location={'Jkuat, Gate A'} icon2={<i class="uil uil-coins"></i>} price={'KSH 7000'} />,
        <Card image={imageUrl} type={'Single'} icon1={<i class="uil uil-location-arrow"></i>} location={'Jkuat, Gate A'} icon2={<i class="uil uil-coins"></i>} price={'KSH 7000'} />,
        <Card image={imageUrl} type={'Twin Room'} icon1={<i class="uil uil-location-arrow"></i>} location={'Jkuat, Gate A'} icon2={<i class="uil uil-coins"></i>} price={'KSH 7000'} />,
        <Card image={imageUrl} type={'Bedsitter'} icon1={<i class="uil uil-location-arrow"></i>} location={'Jkuat, Gate A'} icon2={<i class="uil uil-coins"></i>} price={'KSH 7000'} />,
        <Card image={imageUrl} type={'Bedsitter'} icon1={<i class="uil uil-location-arrow"></i>} location={'Jkuat, Gate A'} icon2={<i class="uil uil-coins"></i>} price={'KSH 7000'} />,
        <Card image={imageUrl} type={'Two Bedroom'} icon1={<i class="uil uil-location-arrow"></i>} location={'Jkuat, Gate A'} icon2={<i class="uil uil-coins"></i>} price={'KSH 7000'} />,
    ]
    return (
        <div className={css.container}>
            <div className={css.column}>
                <div className={css.row}>
                    <span>Search Results</span>
                    <span>152 ads</span>
                </div>
                {/* List */}
                <div className={css.list}>
                    {
                        Cards.map((house, index) => {
                            return <div className={css.cardContainer} key={index} onClick={() => {
                                navigate(`/detail/${index}`);
                            }}>
                                {house}
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Search
