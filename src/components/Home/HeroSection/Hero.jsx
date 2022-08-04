import React from "react";
import "./HeroElements.css";
import loc from "./images/loc.png";
import down from "./images/down.png";
import line from "./images/line.png";
import home from "./images/home.png";
import quick from "./images/quick.png";
import hero from "./images/Hero-Image.png";
import nav_links from "./images/nav-links.png";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="nav">
            <ul>
              <li className="nav-logo">Logo</li>
              <li className="nav-list" >Market</li>
              <li className="nav-list">Wallet</li>
              <li className="nav-list">Planner</li>
              <li className="nav-list">Dashboard</li>
              <li className="nav-list">Courses</li>
              <li className="nav-login">
                <span id="login">Login</span>
              </li>
              <li className="nav-links" ><img src={nav_links} alt="" /></li>
            </ul>
          </div>
          <div className="container-items">
            <div className="items--content">
              <h1 id="g-first">Ghana's First</h1>
              <h3 id="g-paragraph" >Real Estate Investment & 
              Facilitation Platform</h3>
              <h5>The Bubble is the new way to experience real estate.</h5>
              <div className="hero--details">
                <div className="hero-location">
                  <div className="location">
                    <img id="loc-img" src={loc} alt="" />
                    <div className="location-details">
                      <h1>Location</h1>
                      <h3>
                        <span id="location">East Legon Hills</span>
                        <div className="down-img">
                          <img id="down-img" src={down} alt="" />
                        </div>
                      </h3>
                    </div>
                  </div>
                  <img id="line-img" src={line} alt="" height={80} width={3} />
                  <img id="home-img" src={home} alt="" />
                  <div className="type">
                    <h1>Type</h1>
                    <h3>
                      <span id="type">Industrial Home</span>
                      <div className="down-img">
                        <img id="down-img" src={down} alt="" />
                      </div>
                    </h3>
                  </div>
                  <img id="quick-img" src={quick} alt="" />
                </div>
              </div>
            </div>
            <div className="items--img">
              <img id="hero-img" src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
