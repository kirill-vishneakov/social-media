import React from "react"
import style from './Post.module.css'

const Post = (props) => (
  <div className={style.item}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzU9COYvsf_KREbOuuuuWDSyskf8ZAk9m9QxsFjymXJMo28WCVaWPiKd2Nitk6YpCAGx8&usqp=CAU" />
    {props.text}
    {props.likesCount}
  </div>
)

export default Post