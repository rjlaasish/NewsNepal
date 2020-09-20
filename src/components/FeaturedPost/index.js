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
