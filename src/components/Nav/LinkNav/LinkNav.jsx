import {NavLink} from "react-router-dom";
import style from "../Nav.module.css";
import React from "react";

const LinkNav = (props) => (
    <div>
        <NavLink
            className={navData => navData.isActive
                ? style.active
                : style.item}
            to={props.url}>
            {props.name}
        </NavLink>
    </div>
)

export default LinkNav