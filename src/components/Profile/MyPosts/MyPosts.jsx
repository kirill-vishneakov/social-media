import React from "react"
import style from './MyPosts.module.css'
import Post from "./Post/Post"
import {updateNewPostTextActionCreater, addPostActionCreater} from "../../../redux/state";


const MyPosts = (props) => {
    const posts = props.postData.map(el =>
        <Post message={el.message} likesCount={el.likesCount}/>)

    const onPostChange = () => {
        const valueTextarea = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreater(valueTextarea))
    }

    const addPost = () => {
        props.dispatch(addPostActionCreater())
    }

    const newPostElement = React.createRef()

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </div>)
}

export default MyPosts