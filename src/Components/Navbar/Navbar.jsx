import React from 'react'
import css from "./Navbar.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { setIndex } from "../../ReducerAction/reducerAction"

const Navbar = () => {
    const dispatch = useDispatch();
    const index = useSelector((state) => state.index.index);
    const showFilters = () => {
        if (index === 0) {
            // show filters index===1
            dispatch(setIndex(1));
        } else {
            dispatch(setIndex(0));
        }

    }

    const showSidebar = () => {
        if (index === 1) {
            dispatch(setIndex(0));
        } else if (index === 0) {
            dispatch(setIndex(2));
        } else {
            dispatch(setIndex(0));
        }
    }
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
                        <i class={index!==2?"uil uil-create-dashboard":"uil uil-times"} onClick={showSidebar}></i>
                    </div>
                </div>

                {/* search bar */}

                <div className={css.searchbar}>
                    <div className={css.row}>
                        <input type="text" placeholder='I am looking for...' />
                        <i class="uil uil-sliders-v-alt" onClick={showFilters}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
