import React from "react";
import Project1 from'../../images/project-1.jpg';
import Project2 from'../../images/project-2.jpg';
import Project3 from'../../images/project-3.jpg';
import Project4 from'../../images/project-4.jpg';
import Project5 from'../../images/project-5.jpg';
import Project6 from'../../images/project-6.jpg';
import Project7 from'../../images/project-7.jpg';
import Project8 from'../../images/project-8.jpg';
import Project9 from'../../images/project-9.jpg';
import './MyProject.css';
export default function MyProject(){
    return(
        <div className="myproject-container">
             <h1 class="section-heading section-3-heading">My Projects</h1>
        <div class="projects-wrapper center">
          <div class="project">
            <div class="project-text">
              <h2 class="project-name">architect website</h2>
              <h4 class="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src = {`${Project1}`} alt="" />
            <a
              href="https://www.youtube.com/watch?v=3J-EFMzz94g"
              class="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div class="project">
            <div class="project-text">
              <h2 class="project-name">Budget App</h2>
              <h4 class="project-technologies">ReactJS</h4>
            </div>
            <img src = {`${Project2}`} alt="" />
            <a
              href="https://www.youtube.com/watch?v=fDffQYs2WB0"
              class="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div class="project">
            <div class="project-text">
              <h2 class="project-name">wine house</h2>
              <h4 class="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src = {`${Project3}`} alt="" />
            <a
              href="https://www.youtube.com/watch?v=jtmuopTpzGE"
              class="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div class="project">
            <div class="project-text">
              <h2 class="project-name">task manager</h2>
              <h4 class="project-technologies">ReactJS</h4>
            </div>
            <img src = {`${Project4}`} alt="" />
            <a
              href="https://www.youtube.com/watch?v=fqup-BL3VjI"
              class="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div class="project">
            <div class="project-text">
              <h2 class="project-name">The Road</h2>
              <h4 class="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src = {`${Project5}`} alt="" />
            <a
              href="https://www.youtube.com/watch?v=qmyN7lYY_xo"
              class="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div class="project">
            <div class="project-text">
              <h2 class="project-name">food recipe app</h2>
              <h4 class="project-technologies">ReactJS</h4>
            </div>
            <img src = {`${Project6}`} alt="" />
            <a
              href="https://www.youtube.com/watch?v=d1vT4kkTCaw"
              class="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div class="project">
            <div class="project-text">
              <h2 class="project-name">slideshow</h2>
              <h4 class="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src = {`${Project7}`} alt="" />
            <a
              href="https://www.youtube.com/watch?v=1qhSSp2q7n4"
              class="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div class="project">
            <div class="project-text">
              <h2 class="project-name">Hamburger menu</h2>
              <h4 class="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src = {`${Project8}`} alt="" />
            <a
              href="https://www.youtube.com/watch?v=9Q7wy8r3i8w"
              class="project-link"
              target="_blank"
              >Go to Video</a
            >
          </div>
          <div class="project">
            <div class="project-text">
              <h2 class="project-name">CSS grid menu</h2>
              <h4 class="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src = {`${Project9}`} alt="" />
            <a href="" class="project-link" target="_blank">Go to Video</a>
          </div>
        </div>
            </div>
    );
}