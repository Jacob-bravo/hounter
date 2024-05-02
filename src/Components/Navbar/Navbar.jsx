import React from 'react'
import css from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={css.container}>
            <div className={css.column}>
                {/* Header */}
                <div className={css.row}>
                    <div className={css.miniColumn}>
                        <span><span className={css.initials}>Ho</span>unter</span>
                        <span>Home search Simplified</span>
                    </div>
                    <div className={css.filter}>
                        <i class="uil uil-create-dashboard"></i>
                    </div>
                </div>

                {/* search bar */}

                <div className={css.searchbar}>
                    <div className={css.row}>
                        <input type="text" placeholder='I am looking for...' />
                        <i class="uil uil-sliders-v-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
