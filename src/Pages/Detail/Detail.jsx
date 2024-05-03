import React, { useState } from 'react'
import css from "./Detail.module.css"
import Rounded from '../../Components/RoundedBtn/Rounded'
import { useNavigate } from 'react-router-dom'
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const Detail = () => {
    const [modal, setModal] = useState({ visible: false });
    const navigate = useNavigate();
    const url = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGVtcHR5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D';
    const customStyles = {
        background: "var(--background)",
        padding: "20px ",
        width: "80%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "90%",
    };
    const setSchedule=()=>{
        setModal({visible:true});
    }
    return (
        <div className={css.container}>
            <div className={css.column}>
                {/* navigation */}
                <div className={css.row}>
                    <Rounded icon={<i class="uil uil-arrow-left"></i>} onClick={() => {
                        navigate(-1);
                    }} />
                    <Rounded icon={<i class="uil uil-heart-alt"></i>} />
                </div>
                {/* house details */}
                <div className={css.detail}>
                    <img src={url} alt="_id" />
                    <div className={css.descriptionCard}>
                        {/* dots per image index */}
                        <div className={css.imageIndex}>

                        </div>
                        {/* card detail */}
                        <div className={css.card}>
                            <div className={css.rowTwo}>
                                <div className={css.header}>
                                    <span>Bedsitter</span>
                                    <div className={css.location}>
                                        <i class="uil uil-location-arrow"></i>
                                        <span>Juja, Gachororo</span>
                                    </div>
                                </div>
                                <div className={css.price}>
                                    KSH 7,000
                                </div>
                            </div>
                            <span>Description</span>
                            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis saepe rem illo dicta? Nemo delectus iste maxime cumque minus labore. Sed nisi necessitatibus mollitia aperiam beatae impedit laborum nihil dolorum a soluta, vel veritatis facilis ducimus excepturi rem iste repudiandae eaque deserunt reprehenderit ut illum doloremque. Porro vero deleniti neque repudiandae asperiores fuga explicabo culpa, reiciendis corporis. Repellat nam doloribus, commodi repudiandae aliquid quos. Magnam beatae, rerum labore nisi autem ducimus veritatis! Sunt soluta ipsa esse saepe impedit, facilis inventore beatae ullam dolorum magnam officia ipsum labore aliquam ut voluptates voluptas delectus. Pariatur voluptas deleniti natus expedita. Iure, harum nihil. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, dolorem nisi. Officiis dignissimos quae similique architecto odit totam ad exercitationem non expedita possimus quod deleniti quam quos qui odio adipisci quaerat eius eaque minus, ab dolor culpa! Repellat debitis obcaecati illo, itaque nam, quas iste sapiente illum alias nesciunt deleniti, facilis dolores! Quo incidunt iusto rem odit cupiditate, magni vero modi recusandae accusamus veniam nostrum id repudiandae, soluta et, ea aliquid tempore iste? Ad magnam, exercitationem iusto, nesciunt itaque cum consequuntur eos officiis saepe iste modi blanditiis ipsa illo, accusamus quis consectetur molestiae quibusdam ut quod. Quibusdam, assumenda exercitationem! Doloremque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus, itaque cumque alias temporibus neque dignissimos perspiciatis, nulla incidunt exercitationem blanditiis, adipisci magnam. Nulla aliquam itaque distinctio asperiores hic facere, vel quasi dignissimos ad, iste provident animi. Labore modi maxime ipsum. Repellendus architecto, illum vero adipisci neque similique iste nemo.</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* call to action */}
            <div className={css.actionBtn}>
                <div className={css.book} onClick={setSchedule}>
                    <i class="uil uil-bookmark"></i>
                    <span>Book a visit</span>
                </div>
                <div className={css.view}>
                    <i class="uil uil-rotate-360"></i>
                </div>
            </div>
            {/* book schedule rodal */}
            <Rodal
                customStyles={customStyles}
                visible={modal.visible}
                onClose={() => {
                    setModal({ visible: false });
                }}
            >
                <div className={css.schedulecolumn}>
                    <div className={css.bookRow}>
                        Schedule your visit
                    </div>
                    {/* date and time */}
                    <div className={css.dateTime}>
                        <div className={css.rowtwo}>
                            <span>On</span>
                            <input type="date" />
                        </div>
                        <div className={css.rowtwo}>
                            <span>From</span>
                            <input type="time" />
                        </div>
                    </div>
                    {/* contact */}
                    <div className={css.contactInfo}>
                        <div className={css.inputColumn}>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name' />
                        </div>
                        <div className={css.inputColumn}>
                            <label>Phone</label>
                            <input type="text" placeholder='Enter your number' />
                        </div>
                    </div>
                    {/* Note */}
                    <div className={css.note}>
                        <textarea placeholder='Add notes....'></textarea>
                    </div>
                    {/* book button */}
                    <button>Book now</button>
                </div>


            </Rodal>
        </div>
    )
}

export default Detail
