import React from 'react'
import { useRef } from 'react'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import "./Contact.css";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_7rmlpoc', 'template_h9tthge', form.current, {
        publicKey: 'Dq3W35svuU13bjkoA',
    })
    .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section id="contact">
      <div id="social">
        <h1 className="socialTitle">Socials</h1>
        <p className="socialDesc">Here you can contact with me on my social media.
        </p>
        <div className="socialImgs">
          <a href="https://www.linkedin.com/in/abhishek-sharma-051265312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
            <img src={Linkedin} alt="LinkedIn" className="socialImg" />
          </a>
          <a href="https://www.instagram.com/er.abhisheksharma0001/">
            <img src={Instagram} alt="Instagram" className="socialImg" />
          </a>
          <a href="https://github.com/dashboard">
            <img src={Github} alt="Github" className="socialImg" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100005699864403&mibextid=ZbWKwL">
            <img src={Facebook} alt="Facebook" className="socialImg" />
          </a>
        </div>
      </div>
      <div id="contactpage">
        <h1 className="contactTitle">Contact</h1>
        <span className="contactDesc">Feel free to contact me</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>

          <input type="text" className="name"placeholder="Your Name" name="from_name" required/>
            
          <input type="email" className="email"placeholder="Your Email" name="your_email" required/>
            
          <textarea  className="msg" rows="5"  placeholder="Your Message" name="message" required></textarea>
          <button type="submit" value="send" className="submitBtn" onClick={() => {alert("Your Form is submitted.")}}>Submit</button>
       
         </form>
      </div>
    </section>
  );     
                   
}

export default Contact;