import React from "react";
import Navbar from "./Navbar";
import "./styles/contact.css";
import site from "./assets/site.png";
import call from "./assets/call.png";
import mail from "./assets/mail.png";

const ContactPage = () => {
  return (
    <div className=" contact">
      <Navbar />
      <div className="content">
        <div className="contact2">
          <h2 className="text-2xl font-bold mb-4"> CONTACT US</h2>
          <h3>. . . . . .</h3>
        </div>
      </div>
      <div className="footer">
        <div>
          <section className="mb-6">
          <img className="site" src={site} alt="site" />
           <h1>VISIT US</h1>
           <a href="https://www.pimrbhopal.ac.in/" target="_blank">pimrbhopal.ac.in</a>
         
          </section>
        </div>
        <div>
          <section>
          <img className="call" src={call} alt="call" />
            <h1 className="text-xl font-semibold">CALL US</h1>
            <p>+91 999 999 9999</p>
          </section>
        </div>
        <div>
          <section>
          <img className="mail" src={mail} alt="mail" />
            <h1 className="text-xl font-semibold">CONTACT US</h1>
            <a
            id="email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Prestigebhopal2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >Prestigebhopal2@gmail.com</a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
