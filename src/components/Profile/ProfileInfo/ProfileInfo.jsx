import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo = () => (
    <div>
        <div>
            <img src="https://media.istockphoto.com/id/1225173869/photo/house-boat-anchored-in-lake-with-jungle-background-backwaters-kerala-india.jpg?s=612x612&w=0&k=20&c=uo-bsRQjhlT9AgeWBs_pkSvHQwStCelMC75EUpzwjHU="/>
        </div>
        <div className={style.descriptionBlock}>
            ava + discription
        </div>
    </div>
)

export default ProfileInfo