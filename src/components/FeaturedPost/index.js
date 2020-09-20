<<<<<<< HEAD
import React from "react";
import SectionHeading from "../SectionHeading";
import FeaturedPostPill from "../FeaturedPostPill";
import newssrcicon from "../../assets/images/newssrcicon.png";
import prachanda from "../../assets/images/prachanda.jpg";
import "./style.scss";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

const FeaturedPost = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await Axios.get("/api/v1/onlinekhabar/trending")
      .then((res) => res.data)
      .then((datas) => setData(datas));
  };

  useEffect(() => {
    fetchData();
    //   console.log(data)
  }, []);

  // useEffect(()=>{
  //  setData(props);
  // },[])

  return (
    <>
     
      {data.map((item) => {
        return (
         <>
          <FeaturedPostPill
            newssrcicon={item.sourceImage}
            newssrc={item.sourceName}
            newsimg={item.newsImage}
            newshead={item.title}
            newsdesc={item.description}
          />
          <FeaturedPostPill
            newssrcicon={item.sourceImage}
            newssrc={item.sourceName}
            newsimg={item.newsImage}
            newshead={item.title}
            newsdesc={item.description}
          />
         </>
        );
      })}
    </>
  );
};

export default FeaturedPost;
=======
import React from 'react'
import SectionHeading from '../SectionHeading'
import FeaturedPostPill from '../FeaturedPostPill'
import newssrcicon from '../../assets/images/newssrcicon.png'
import prachanda from '../../assets/images/prachanda.jpg'
import './style.scss'

const FeaturedPost = () => {
    return (
        <>
            <SectionHeading head="Featured" />
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
    )
}

export default FeaturedPost
>>>>>>> 3c9846a0c2dc748a749e753aec0c401e9d60e498
