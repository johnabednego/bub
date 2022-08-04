import React from "react";
import "./SigninElements.css";
import { FcGoogle } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const Signin = () => {
  return (
    <div className="signin__container">
      <div className="signin__mobile-header">
        <h2>LOGO</h2>
        <h3 className="hamburger">
          <GiHamburgerMenu />
        </h3>
      </div>
      <div className="signin__details">
        <h1>Hey, welcome back</h1>
        <h3>Kindly enter your details and lets bubble</h3>
        <form method="post">
          <div className="mail__container">
            <p>Email</p>
            <input
              id="mail"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="password__container">
            <p>Password</p>
            <input
              id="password"
              type="password"
              placeholder="Your Password"
              required
            />
          </div>
          <div className="form__below">
            <div className="form__remember-me">
              <input type="checkbox" name="rememberMe" />
              <p>Remember Me</p>
            </div>
            <a href="/forgotpassword">Forgot Password?</a>
          </div>
          <div className="form__buttons">
            <button id="signIn">Sign In</button>
          </div>
        </form>
        <button id="signGoogle">
          <h2>
            <FcGoogle />
          </h2>
          &nbsp; Sign in with Google
        </button>
        <p className="form__ending">
          Don't have an account? &nbsp;
          <a href="/signup">Sign Up</a>
        </p>
      </div>
      <div className="signin__img-section">
        <div className="testimonial__wrapper">
          <div className="testimonial__container">
            <p>
              “We have been marketing all our homes and apartments on The Bubble
              for a while now and the experience has by far been one of the best
              and smooth transaction process.”
            </p>
            <div className="testimonial__below">
              <div className="testimonial__person">
                <h3>Leonette Dapaah</h3>
                <h2>CEO, Texile Homes</h2>
              </div>
              <div className="testimonial__arrows">
                <h2>
                  <BsArrowLeftCircle />
                </h2>
                <h2>
                  <BsArrowRightCircle />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
