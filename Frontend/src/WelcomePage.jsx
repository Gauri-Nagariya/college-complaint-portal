import React from "react";
import { useNavigate } from "react-router-dom";
import pimrImage from "./assets/pimr.png";
import logo from "./assets/logoo.png";
import "./styles/welcome.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
      
    <div className="welcome">
      <div className="welcome2">


      <div className="img">
        <img className="logo" src={logo} alt="Welcome" />
      </div>

      <div className="img">
        <img className="college-img" src={pimrImage} alt="Welcome" />
      </div>

      <div className="heading">
        <h1>Welcome to the College Complaint Request Portal</h1>
      </div>

      {/* <div className="para">
        <p>
        Trouble with the Wi-Fi? Cafeteria mystery meals? Or is that printer always on strike? <br />   Don’t worry – we’ve got a solution, not just a complaint box!
        </p>
      </div> */}

      <div className="button">
        <p>Ready to make things <br /> better?</p>
        <button className="login_button" onClick={() => navigate("/login")}>Login</button>
      </div>
      </div>

    </div>

  );
};

export default WelcomePage;
