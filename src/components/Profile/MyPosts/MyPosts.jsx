import React from "react"
import style from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = () => (
  <div className={style.content}>
    my posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <Post text='Hi, how are you?' likesCount='56' />
    <Post text='Hi! Im fine' likesCount='0' />
  </div>
)

export default MyPosts