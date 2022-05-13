import React, { useState, useEffect } from "react";

const Nav = (props) => {
    let [mobileNav, setMobileNav] = useState(false);
    const toggleMobileNav = (whatSection) => {
        props.setActiveModule((activeModule) => whatSection);
        localStorage.setItem("activeModule", whatSection);

        if (mobileNav === false) {
            setMobileNav((mobileNav) => true);
        } else {
            setMobileNav((mobileNav) => false);
        }
    }

    return (<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">{props.userEmail}</a>
        <button className="navbar-toggler" onClick={() => toggleMobileNav()}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={mobileNav === false ? "collapse navbar-collapse" : "collapse navbar-collapse show animiated fadeIn"}>

            <ul className="navbar-nav mr-auto">
                <li className={props.activeModule === "mainContent" ? "nav-item active" : "nav-item"}>
                    <a className="nav-link" href="#" onClick={() => toggleMobileNav("mainContent")}>Main Content</a>
                </li>
            </ul>
        </div>
    </nav>)

}

export default Nav;
