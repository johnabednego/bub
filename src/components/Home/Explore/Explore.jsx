import React from 'react'   
import Carousel from "./Carousel/Carousel"
import Swipper from "./Swipper/Swipper"
import "./ExploreElements.css"
import arrow from "./images/arrow-left.png";
import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
import slide4 from "./images/slide4.jfif";
import slide5 from "./images/slide5.jfif";
import slide6 from "./images/slide6.jfif";
import slide7 from "./images/slide7.jfif";
import slide8 from "./images/slide8.jfif";
import slide9 from "./images/slide9.jfif";
import slide10 from "./images/slide10.jfif";
export default function Explore() {

  return (
   <>
   
    <div className="explore">
        <div className="e-title">
            <h1 id='e-title'>Explore Our Market</h1>
           <center> <div className="title-after"></div></center>
        </div>
        <button className='explore-more' type='button'><span id='explore-more' >Explore More </span><img id='arrow-img' src={arrow} alt="" /> </button>

        <div className="explore-slider">
          <div className="explore-wrapper"> 
          <div className="carousel">
            <Carousel 
                show={3}
            >
              <img src={slide1} alt="placeholder" />
              <img src={slide2} alt="placeholder"/>
              <img src={slide3} alt="placeholder" />
              <img src={slide4} alt="placeholder" />
              <img src={slide5} alt="placeholder" />
              <img src={slide6} alt="placeholder" />
              <img src={slide7} alt="placeholder" />
              <img src={slide8} alt="placeholder" />
              <img src={slide9} alt="placeholder" />
              <img src={slide10} alt="placeholder" />
            </Carousel>
            </div>
            <div className='swipper'>
            <Swipper/>
            </div>
            {/* <div className='slide1'>
              <img src="" alt="" />
              <div className="text">
                <h1>Trasacco Housing Ltd.</h1>
                <h3></h3>
              </div>
              <button className='slide-explore' type='button'><span id='slide-explore' >Explore More </span> </button>
            </div> */}
          </div>
        </div>

        
    </div>
   </>
  );
}
