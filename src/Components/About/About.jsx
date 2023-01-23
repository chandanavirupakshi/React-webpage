import React from "react";
import  ProgressBar from "../ProgressBar";
import'./About.css';
export default  function About(){
    let skills = [
        {
            skill: "HTML",
            percent: "60"
        },
        {
            skill: "CSS",
            percent: "60"
        },
        {
            skill: "React",
            percent: "60"
        },
        {
            skill: "MangoDB",
            percent: "60"
        },
        {
            skill: "JAVA",
            percent: "60"
        },
        {
            skill: "SQL",
            percent: "60"
        },
        {
            skill: "DBB",
            percent: "60"
        },
    ];
    return(
        <div className="about-container">
           <u> <h2> ABOUT ME </h2> </u>
            <div className="progress-bar-wrapper">
                {
                    skills.map(el => <progressBar Progress={el. percent} skill={el.skill} />)
                }
            </div>
        </div>

    );
}