import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import newssrcicon from "../../assets/images/ratopati.png";
import onlinekhabar from "../../assets/images/onlinekhabar.png";
import grey from "../../assets/images/grey.jpg";
import setopati from "../../assets/images/setopati.jpg";
import { getFeaturedItems } from "../../redux/Action/FeaturedItemAction";
import FeaturedPostPill from "../FeaturedPostPill";
import LatestPost from "../LatestPost";
import FeaturedPostPillLoading from "../FeaturedPostPillLoading";
import ispiner from "../../assets/images/ispinner.jpg";
import SectionHeading from "../SectionHeading";

 const AllNews=()=> {
  const checkNewsSource = (newsSource) => {
    if (newsSource === "Online Khabar") {
      return onlinekhabar;
    }
    if (newsSource === "Setopati") {
      return setopati;
    }
    if (newsSource === "Ratopati") {
      return newssrcicon;
    }
  };

  const [featuredData, setfeaturedData] = useState({
    data: [],
    loading: true,
    error:false
  });

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=>{
    dispatch(getFeaturedItems());
    console.log(featuredData)
  },[])

  let selectData = useSelector((state) => state);

  useEffect(() => {

    setfeaturedData({...featuredData,...selectData})
  }, [selectData]);
 

 



  return (
    <>
      <LatestPost />
      <SectionHeading head="Featured" />

      {featuredData.loading ? (
        <>
         <FeaturedPostPillLoading/>
         <FeaturedPostPillLoading/>
         <FeaturedPostPillLoading/>
         <FeaturedPostPillLoading/>
         <FeaturedPostPillLoading/>
         <FeaturedPostPillLoading/>
        </>
      ) : (
        featuredData.data.map((item) => {
          return (
            <FeaturedPostPill
              key={item.id}
              newssrcicon={checkNewsSource(item.sourceName)}
              newssrc={item.sourceName}
              newsimg={item.newsImage ? item.newsImage : ispiner}
              newshead={item.title}
              newsdesc={item.description}
              onClicked={() =>
                history.push({
                  pathname: "/detailnews",
                  data: item,
                })
              }
            />
          );
        })

     
        
      )
     
    }
     {featuredData.error &&   <p
      style={{
        color: "red",
        textAlign: "center",
        margin: "30px 0px 50px 0px",
      }}
    >
     Sorry couldn't fetch data
    </p>}
    </>
  );
}


export default AllNews;