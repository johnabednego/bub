import React from "react";
import "./WhyElements.css";
import rectangle from "../../../pngs/icons/rectangle.png";
import technology from "../../../pngs/icons/project-management.png";
import handshake from "../../../pngs/icons/handshake.png";
import platform from "../../../pngs/icons/online-lesson.png";
import first from "../../../pngs/icons/quality-control.png";

const Why = () => {
  return (
    <div className="container__why">
      <div className="container applyflex">
        <div className="container__why-main">
          <div className="why-main__header">
            <img src={rectangle} alt="rectangle" />
            <h1>Why Choose Us</h1>
          </div>
          <p>
            Currently, there are no companies offering the same services as the
            Bubble in the Ghanaian ecosystem The closest service would be
            project listings on blogs, websites and social media platforms.
            However, in west Aftrica, Relsify from Nigeria is offering ownership
            of real estate through the use of digital currencies. Additionally,
            the Relsify platform allows crowdfunding for construction projects.
          </p>
        </div>
        <div className="container__why-dets">
          <div className="why-dets__sub1">
            <img src={technology} alt="tech" />
            <h3>Cutting Edge Technology</h3>
            <p>
              The Bubble makes use of blockchain technology and AI technologies
              to improve security and transactions, authenticate documents,
              provide market analysis and so much more.
            </p>
          </div>
          <div className="why-dets__sub2">
            <img src={handshake} alt="hand shake" />
            <h3>Partnerships with Major Brands</h3>
            <p>
              Partnerships with major brands, regulators in the real estate
              space as well as indirect businesses such as mortgage and
              insurance firms would be established
            </p>
          </div>
          <div className="why-dets__sub3">
            <img src={platform} alt="platform" />
            <h3>Easy to Use Platform for all</h3>
            <p>
              In addition to some free services offered, the platform si easy to
              use with its interactive interface that basically assists and
              guides clients in all endeavors.
            </p>
          </div>
          <div className="why-dets__sub4">
            <img src={first} alt="first" />
            <h3>First Mover Advantage</h3>
            <p>
              Due to the untapped market, the Bubble would enjoy first mover
              advantage. Even though it is an exciting position, e would be
              abreast with the market and trendso solidify ur positions at all
              times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
