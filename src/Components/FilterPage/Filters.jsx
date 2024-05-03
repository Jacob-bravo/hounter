import React from 'react'
import css from "./Filters.module.css"
import { useSelector, useDispatch } from 'react-redux'
import Rounded from "../../Components/RoundedBtn/Rounded"
import { setIndex } from '../../ReducerAction/reducerAction'

const Filters = () => {
    const dispatch = useDispatch();
    const index = useSelector((state) => state.index.index);
    return (
        <div className={`${css.bottomSheet} ${index === 1 ? css.open : ''}`}>
            <div className={css.column}>
                <div className={css.row}>
                    <span>Filter By</span>
                    <Rounded icon={<i class="uil uil-times"></i>} onClick={() => {
                        dispatch(setIndex(0));
                    }} />
                </div>

                <div className={css.options}>
                    <select>
                        <option value="Low">Lowest Rent</option>
                    </select>
                    <select>
                        <option value="A">Gate A</option>
                    </select>
                    <select>
                        <option value="Type">Bedsitter</option>
                    </select>
                    <select>
                        <option value="Range">Price Range</option>
                    </select>
                </div>

                <button>Apply filters</button>
            </div>
        </div>
    )
}

export default Filters
