import React from "react";
import logo from "../images/Troll Face.png"

export default function Header(){
    return (
        <header className="header">
            <img src={logo} alt="troll-logo" className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--info">React course Project</h4>
        </header>
    )
}