import React from "react";
import "./style.css";
import { Avatar } from "@material-ui/core";
import BoxTile from "../BoxTile";
import FeaturedPostPill from '../FeaturedPostPill'
import newssrcicon from '../../assets/images/newssrcicon.png'
import prachanda from '../../assets/images/prachanda.jpg'
import messi from '../../assets/images/messi.jpg'
import liverpool from '../../assets/images/liverpool.jpg'
import bayern from '../../assets/images/bayern.png'
import coach from '../../assets/images/coach.jpg'

function Sports() {
  return (
    <>
      <div
        className="tile-wrapper"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <BoxTile image={bayern} />
        <BoxTile image={messi}/>
        <BoxTile image={coach}/>
        <BoxTile image={liverpool}/>
      </div>

      <div className="tile-part">
        <div className="big-tile"  style={{backgroundColor:"#00846D"}}>
          <Avatar alt="A" src={coach} className="avatar-img" />
        </div>

        <div className="big-tile" style={{backgroundColor:"#A77A00"}}>
          <Avatar alt="A" src={messi} className="avatar-img"  />
        </div>
      </div>

      <FeaturedPostPill newssrcicon={newssrcicon} newssrc="कान्तिपुर दैनिक" newsimg={prachanda} newshead="प्रधानमन्त्री ओलीसँग देउवाको प्रश्‍न : लिदीका स्थानीयलाई सुरक्षित
            स्थानमा किन सारिएन ?" newsdesc="प्रधानमन्त्री तथा नेकपाका अध्यक्ष केपी शर्मा ओली, नेकपाका अर्का अध्यक्ष ..." />
      <FeaturedPostPill newssrcicon={newssrcicon} newssrc="कान्तिपुर दैनिक" newsimg={prachanda} newshead="प्रधानमन्त्री ओलीसँग देउवाको प्रश्‍न : लिदीका स्थानीयलाई सुरक्षित
            स्थानमा किन सारिएन ?" newsdesc="प्रधानमन्त्री तथा नेकपाका अध्यक्ष केपी शर्मा ओली, नेकपाका अर्का अध्यक्ष ..." />
      <FeaturedPostPill newssrcicon={newssrcicon} newssrc="कान्तिपुर दैनिक" newsimg={prachanda} newshead="प्रधानमन्त्री ओलीसँग देउवाको प्रश्‍न : लिदीका स्थानीयलाई सुरक्षित
            स्थानमा किन सारिएन ?" newsdesc="प्रधानमन्त्री तथा नेकपाका अध्यक्ष केपी शर्मा ओली, नेकपाका अर्का अध्यक्ष ..." />
      <FeaturedPostPill newssrcicon={newssrcicon} newssrc="कान्तिपुर दैनिक" newsimg={prachanda} newshead="प्रधानमन्त्री ओलीसँग देउवाको प्रश्‍न : लिदीका स्थानीयलाई सुरक्षित
            स्थानमा किन सारिएन ?" newsdesc="प्रधानमन्त्री तथा नेकपाका अध्यक्ष केपी शर्मा ओली, नेकपाका अर्का अध्यक्ष ..." />
      <FeaturedPostPill newssrcicon={newssrcicon} newssrc="कान्तिपुर दैनिक" newsimg={prachanda} newshead="प्रधानमन्त्री ओलीसँग देउवाको प्रश्‍न : लिदीका स्थानीयलाई सुरक्षित
            स्थानमा किन सारिएन ?" newsdesc="प्रधानमन्त्री तथा नेकपाका अध्यक्ष केपी शर्मा ओली, नेकपाका अर्का अध्यक्ष ..." />
      <FeaturedPostPill newssrcicon={newssrcicon} newssrc="कान्तिपुर दैनिक" newsimg={prachanda} newshead="प्रधानमन्त्री ओलीसँग देउवाको प्रश्‍न : लिदीका स्थानीयलाई सुरक्षित
            स्थानमा किन सारिएन ?" newsdesc="प्रधानमन्त्री तथा नेकपाका अध्यक्ष केपी शर्मा ओली, नेकपाका अर्का अध्यक्ष ..." />
    </>
  );
}

export default Sports;
