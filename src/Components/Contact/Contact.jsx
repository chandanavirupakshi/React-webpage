import React from "react";
import './Contact.css';
 export default function Contact(){
     return(
<div className="Contact-Container">
<h1 class="section-heading section-4-heading">Contact Me</h1>
        <form class="contact-form center">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <input type="submit" value="Submit" class="contact-form-btn" />
        </form>
</div>
     );
 }