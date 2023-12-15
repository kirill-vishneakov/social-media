import React from "react"
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => (
  <div className={style.content}>
    <div>
      <img src="https://media.istockphoto.com/id/1225173869/photo/house-boat-anchored-in-lake-with-jungle-background-backwaters-kerala-india.jpg?s=612x612&w=0&k=20&c=uo-bsRQjhlT9AgeWBs_pkSvHQwStCelMC75EUpzwjHU=" />
    </div>
    <div>
      ava + discription
    </div>
    <MyPosts />
  </div>
)

export default Profile