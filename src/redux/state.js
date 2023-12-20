const addPostType = 'ADD-POST'
const addMessageType = 'ADD-MESSAGE'
const updateNewPostTextType = 'UPDATE-NEW-POST-TEXT'
const updateNewMessageTextType = 'UPDATE-NEW-MESSAGE-TEXT'

const store = {
    _state: {
        profile: {
            postData: [
                {id: '1', message: 'Hi, how are you?', likesCount: '56'},
                {id: '2', message: 'Hello', likesCount: '13'},
                {id: '3', message: 'I.m fine', likesCount: '0'},
                {id: '4', message: 'And how are you?', likesCount: '2'},
            ],
            newPostText: ''
        },
        dialogs: {
            usersData: [
                {id: '1', name: 'Kirill'},
                {id: '2', name: 'Nast'},
                {id: '3', name: 'Artem'},
                {id: '4', name: 'Aliona'},
                {id: '5', name: 'Andrey'},
                {id: '6', name: 'Nikita'},
                {id: '7', name: 'Masha'},
                {id: '8', name: 'Valera'},
            ],
            messagesData: [
                {id: '1', message: 'Hi', isGet: true},
                {id: '2', message: 'How are you', isGet: true},
                {id: '3', message: 'Yo', isGet: true},
                {id: '4', message: 'Hello', isGet: false},
                {id: '5', message: 'HH', isGet: false},
                {id: '6', message: 'Privet', isGet: true},
                {id: '7', message: 'YOu!', isGet: true},
                {id: '8', message: 'HI-HI-HI', isGet: false},
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {},

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if(action.type === addPostType){
            const newPost = {
                id: '5',
                message: this._state.profile.newPostText,
                likesCount: '0'
            }
            this._state.profile.postData.unshift(newPost)
            this._state.profile.newPostText = ''
            this._callSubscriber()
        }
        else if (action.type === updateNewPostTextType){
            this._state.profile.newPostText = action.newText
            this._callSubscriber()
        }
        else if (action.type === addMessageType){
            const newMessage = {
                id: '9',
                message: this._state.dialogs.newMessageText,
                isGet: false
            }
            this._state.dialogs.messagesData.push(newMessage)
            this._state.dialogs.newMessageText = ''
            this._callSubscriber()
        }
        else if (action.type === updateNewMessageTextType){
            this._state.dialogs.newMessageText = action.newText
            this._callSubscriber()
        }
    }
}

const addPostActionCreater = () => {
    return (
        {
            type: addPostType
        }
    )
}

const addMessageActionCreater = () => {
    return (
        {
            type: addMessageType
        }
    )
}

const updateNewPostTextActionCreater = (valueTextarea) => {
    return (
        {
            type: updateNewPostTextType,
            newText: valueTextarea
        }
    )
}

const updateNewMessageTextActionCreater = (valueTextarea) => {
    return (
        {
            type: updateNewMessageTextType,
            newText: valueTextarea
        }
    )
}

export{
    store,
    addPostActionCreater,
    addMessageActionCreater,
    updateNewPostTextActionCreater,
    updateNewMessageTextActionCreater
}