import React from "react"
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import AddMessage from "./AddMessage/AddMessage";

const Dialogs = (props) => {
    const users = props.usersData.map(el =>
        <DialogItem id={el.id} name={el.name}/>)

    const messages = props.messagesData.map(el =>
        <Message message={el.message} isGet={el.isGet}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {users}
            </div>
            <div className={style.messages}>
                {messages}
                <AddMessage
                    dispach={props.dispatch}
                    newMessageText={props.newMessageText}
                />
            </div>
        </div>
    )
}

export default Dialogs