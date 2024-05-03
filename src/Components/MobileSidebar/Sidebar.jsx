import React from 'react'
import css from "./Sidebar.module.css"
import { Links } from '../../Data';
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const index = useSelector((state) => state.index.index);
    return (
        <div className={`${css.openSidebar} ${index===2 ? css.open : ''}`}>
            <div className={css.column}>
                {/* Links */}
                <div className={css.links}>
                    {
                        Links.map((textlink, index) => {
                            return <div className={css.row} key={index}>
                                <div className={index === 0 ? css.active : css.nonactive}></div>
                                <span>{textlink}</span>
                            </div>
                        })
                    }
                </div>
                {/* sign up */}
                <div className={css.newsLetter}>
                    <span>Discover new homes first ?</span>
                    <div className={css.submit}>
                        <input type="text" placeholder='Enter your email' />
                        <button><i class="uil uil-arrow-up-right"></i></button>
                    </div>
                </div>
                {/* socials */}
                <div className={css.socials}>
                    <div className={css.miniColumn}>
                        <div className={css.socialrow}>
                            <i class="uil uil-twitter"></i>
                            <i class="uil uil-instagram-alt"></i>
                            <i class="uil uil-youtube"></i>
                        </div>
                        <div className={css.row}>
                            <i class="uil uil-map-marker"></i>
                            <span>Juja Estate, Nairobi</span>
          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
