import React from "react";
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 export default function Services(){
     return(
        <div>
        <FontAwesomeIcon icon={['fab', 'apple']} />
        <FontAwesomeIcon icon={['fab', 'microsoft']} />
        <FontAwesomeIcon icon={['fab', 'google']} />
  
        <FontAwesomeIcon icon="check-square" />
        With Coffee Checked, these companies always know their coffee is hot and ready!
      
        <div class="services">
        <div class="service">
          <i class="far fa-lightbulb"></i>
          <h2 class="service-heading">Creative</h2>
        </div>
        <div class="service">
          <i class="fas fa-cut"></i>
          <h2 class="service-heading">Problem Solving</h2>
        </div>
        <div class="service">
          <i class="fas fa-tachometer-alt"></i>
          <h2 class="service-heading">Fast</h2>
        </div>
        <div class="service">
            <i class="fas fa-rocket"></i>
            <h2 class="service-heading">Dynamic</h2>
          </div>
      </div>
      </div>
     );
 }