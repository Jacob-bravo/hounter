import React from 'react'
import css from "./Home.module.css"
import { Houses } from '../../Data';
import Card from '../../Components/HouseCard/Card';

const Home = () => {
    const imageUrl = 'https://plus.unsplash.com/premium_photo-1684863504486-3d720142adc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGVtcHR5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D';
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
            <div className={css.categories}>
              <span>Categories</span>
                <div className={css.roomtypeList}>
                    {
                        Houses.map((type, index) => {
                            return <div className={css.typeHouse} key={index}>
                                <span>{type}</span>
                            </div>
                        })
                    }
                </div>

            </div>
            <div className={css.list}>
                {
                    Cards.map((house, index) => {
                        return <div className={css.cardContainer} key={index}>
                            {house}
                        </div>
                    })
                }
            </div>


        </div>
    )
}

export default Home
