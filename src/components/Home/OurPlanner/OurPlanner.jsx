import React from "react";
import "./PlannerElements.css";
import rectangle from "../../../pngs/icons/Rectangle-green.png";
import PlannerSvg from "../../../pngs/icons/PlannerSvg.png";

const OurPlanner = () => {
  return (
    <div className="container">
      <div className="container__planner">
        <div className="planner__dets">
          <div className="planner__dets-header">
            <img src={rectangle} alt="bar" />
            <h1>Our Planner</h1>
          </div>
          <p>
            Our in-built planner helps you to dynamically and procedurally pick
            the best investment properties based on our artificial intelligence
            systems and modules built by our team.
          </p>
          <button>Get Started</button>
        </div>
        <img className="planner__img" src={PlannerSvg} alt="Planner" />
      </div>
    </div>
  );
};

export default OurPlanner;
