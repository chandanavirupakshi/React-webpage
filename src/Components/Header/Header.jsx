import React from "react";
import './Header.css';
import PersonImg from'../../images/john-smith.jpg';
export default function Header(){
    return(
        <div className="header-container">
            <h1>Web Developer</h1>
            <img src = {`${PersonImg}`} alt="" />
            <h3>John Smith</h3>
            <a href="#">Projects</a>
        </div>
    );
}