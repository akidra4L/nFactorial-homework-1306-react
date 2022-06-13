import React from "react";
import IconNotifications from "../icons/notification";
import { format } from 'date-fns';

import "./styles.css";

const Header = () => {
    const date = format(new Date(), 'dd.MM.yyyy HH:mm');
    
    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-item">
                <div className="icon-wrapper">
                    <IconNotifications />
                </div>
                <div className="input-text">
                    <input type="text" placeholder="Type something here" />
                </div>
            </div>
            <div className="time">
                <h2>{date}</h2>
            </div>
        </div>
    )
}

export default Header;