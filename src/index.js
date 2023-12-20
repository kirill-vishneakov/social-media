import reportWebVitals from './reportWebVitals'
import {store} from "./redux/state"
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    )
}

renderEntireTree()

store.subscribe(renderEntireTree)

reportWebVitals()