import React from "react"
import style from './Nav.module.css'
import LinkNav from "./LinkNav/LinkNav";
import Frends from "./Frends/Frends";

const Nav = () => {
    const navItems = [
        {name:"Profile", url:"/profile"},
        {name:"Messages", url:"/dialogs"},
        {name:"News", url:"/news"},
        {name:"Music", url:"/music"},
        {name:"Settings", url:"/settings"},
    ]
    return(
    <nav className={style.nav}>
        {navItems.map(el =>
            <LinkNav name={el.name} url={el.url}/>)}
        <Frends />
    </nav>)
}

export default Nav