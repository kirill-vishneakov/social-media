import React from "react"
import style from './Message.module.css'

const Message = (props) => (
    <div className={`${style.message} ${props.isGet ? style.left : style.right}`}>
        {props.message}
    </div>
)

export default Message