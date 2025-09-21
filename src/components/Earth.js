import React from "react";
import "./Earth.scss";
import Orbit from "../assets/earth/orbit.svg";
import EarthImg from "../assets/earth/earth.svg";
import Rocket from "../assets/earth/rocket.svg";
import WhiteEllipse from "../assets/earth/whiteEllipse.svg";
import OrangeEllipse from "../assets/earth/orangeEllipse.svg";
import YellowEllipse from "../assets/earth/yellowEllipse.svg";

function Earth() {
  return (
    <div className="earth">
      <img src={Orbit} alt="Orbit" className="earth__orbit" />
      <img src={Rocket} alt="Rocket" className="earth__rocket" />
      <img src={WhiteEllipse} alt="White satellite" className="earth__white" />
      <img src={OrangeEllipse} alt="Orange satellite" className="earth__orange" />
      <img src={YellowEllipse} alt="Yellow satellite" className="earth__yellow" />
      <img src={EarthImg} alt="Earth" className="earth__planet" />
    </div>
  );
}

export default Earth;