import React from "react";
import "./style.css";

function BoxTile(props) {

  const {image}=props;
  return (
    <>
      <div className="box">
        <img src={image} alt="" className="box-img" />
       <div className="overlay-and-text">
       <div className="overlay"></div>
       
        <div className="box-title">प्रधानमन्त्री ओलीसँग देउवाको प्रश्‍न</div>
        <p className="time">25 min ago</p>
       </div>
      </div>
    </>
  );
}

export default BoxTile;
