import React from "react"
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo />
            <MyPosts
                    dispatch={props.dispatch}
                    newPostText={props.newPostText}
                     postData={props.postData}/>
        </div>
    )
}

export default Profile