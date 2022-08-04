import React from "react";
import "./FooterElements.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="container">
        <h1>
          For more <br />
          information on...
        </h1>
        <div className="footer__links">
        <div className="footer__links_1">
          <a href="/">Help & Contact</a>
          <a href="/">Careers</a>
          <a href="/">About The Bubble</a>
          <a href="/">Safety & Security</a>
          <a href="/">Transparency & Privacy</a>
          </div>
          <div className="footer__links_2">
          <a href="/">Publications & Reports</a>
          <a href="/">Newsletter</a>
          <a href="/">Other Languages</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy & Cookies</a>
          </div>
        </div>
        <div className="socials__container">
          <h1>Interact</h1>
          <div className="socials__container-logos">
            <h2>
              <FaFacebookF />
            </h2>
            <h2>
              <BsTwitter />
            </h2>
            <h2>
              <FaLinkedinIn />
            </h2>
            <h2>
              <FaPinterestP />
            </h2>
          </div>
        </div>
        <div className="footer__copyright">
          <p>Powered By Clade Industries</p>
          <p>&copy; 2021 Clade Industries</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
