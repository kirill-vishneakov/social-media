import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Profile from "./components/Profile/Profile"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import Dialogs from "./components/Dialogs/Dialogs"
import {updateNewPostText} from "./redux/state";

const App = (props) =>
    (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile"
                               element={
                                   <Profile
                                       newPostText={props.state.profile.newPostText}
                                       postData={props.state.profile.postData}
                                       dispatch={props.dispatch}
                                   />
                        } />

                        <Route path="/dialogs"
                               element={
                            <Dialogs
                                   usersData={props.state.dialogs.usersData}
                                   messagesData={props.state.dialogs.messagesData}
                                   newMessageText={props.state.dialogs.newMessageText}
                                   dispatch={props.dispatch}
                            />
                        }/>

                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

export default App