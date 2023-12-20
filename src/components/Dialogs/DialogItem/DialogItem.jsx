import React from "react"
import {NavLink} from "react-router-dom"
import style from './DialogItem.module.css'

const DialogItem = (props) => (
    <div className={style.dialog}>
        <span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzU9COYvsf_KREbOuuuuWDSyskf8ZAk9m9QxsFjymXJMo28WCVaWPiKd2Nitk6YpCAGx8&usqp=CAU"/>
        </span>
        <span>
            <NavLink to={props.id}>{props.name}</NavLink>
        </span>
    </div>
)

export default DialogItem