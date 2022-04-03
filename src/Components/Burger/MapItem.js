import React from 'react'
// instal icon dengan 'npm i react-icons'
import { BiMinusCircle, BiChevronUpCircle, BiChevronDownCircle } from 'react-icons/bi'

import style from './controller.module.css'

const MapItem = (props) => {
    return (
        <div className={style.map_item}>
            <h6>{props.label}</h6>
            <div className={style.map_controller}>
                {/* icon digunakan sebagai button untuk menghapus ingredient */}
                <BiMinusCircle onClick={props.removeHandler} className={style.remove_button} />
                {/* icon digunakan sebagai button untuk menaikkan ingdredient, ditampilkan bila props.firstItem = false */}
                { !props.firstItem && <BiChevronUpCircle onClick={props.upHandler} className={style.order_button} />}
                {/* icon digunakan sebagai button untuk menurunkan ingredient, ditampilkan bila props.lastItem = false */}
                { !props.lastItem && <BiChevronDownCircle onClick={props.downHandler} className={style.order_button} />}
            </div>
        </div>
    )
}

export default MapItem