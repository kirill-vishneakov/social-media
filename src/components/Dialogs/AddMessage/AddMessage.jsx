import React from "react"
import style from './AddMessage.module.css'
import {updateNewMessageTextActionCreater, addMessageActionCreater} from "../../../redux/state";

const AddMessage = (props) => {
    const newMessage = React.createRef()

    const addMessage = () => {
        props.dispach(addMessageActionCreater())
    }

    const onMessageChange = () => {
        const valueTextarea = newMessage.current.value
        props.dispach(updateNewMessageTextActionCreater(valueTextarea))
    }

    return (
        <div className={style.addMessage}>
            <div>
                <textarea
                    ref={newMessage}
                onChange={onMessageChange}
                value={props.newMessageText}/>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default AddMessage