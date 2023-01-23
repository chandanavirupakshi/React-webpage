import React from "react";

export default function ProgressBar({ progress, skill}){
    const ProgressWrapper = {
        width: "60rem",
        height: "3rem",
        backgroundColor: "#ccc",
        margin: "1.5rem 0",
        borderRadius: 40,
        boxShadow: "0.2rem 0.2rem 1rem #555"
      };
      const ProgressBar = {
        width:  `${progress}%` ,
        height: "100%",
        backgroundColor: "#e41c6f",
        borderRadius: 40,
        transition: "width 0.5s 0.5s ease-in-out"
      };
       const ProgressSkill = {
           color:"#fff",
           fontSize:"1.5rem",
           float:"left",
           margin:"0.2rem"
       };
      const progresstext =  {
    
        fontSize: "1.8rem",
        color: "#fff",
        fontWeight: 700,
        float:"right",
        margin: "auto 1rem"
      };
     return(
         <div>
             <div style={ProgressWrapper}>
                 <span style={ProgressSkill}>{skill}</span>
                 <span style={progresstext}>{`${progress}%`}</span>
             </div>
         </div>
     );
}