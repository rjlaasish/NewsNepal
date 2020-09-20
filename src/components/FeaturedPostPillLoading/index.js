import React from 'react'
import grey from "../../assets/images/grey.jpg";
import './style.scss'


const FeaturedPostPillLoading = () => {
    return (
        <>
        <div className="news-wrapper"  >
            <div className="featured-news">
            <div className="mero-news-src-head">
            <img className="mero-newsImage" src={grey} alt=""/>  
                <img className="title-image"  src={grey} alt=""/>   
            </div>
                <img className="desc-image"  src={grey} alt=""/>   
                <img className="desc-image"  src={grey} alt=""/>   
                <img className="desc-image"  src={grey} alt=""/>   
            
            </div>
            <div className="newsimg">
               <img src={grey} alt="loading" />
               
            </div>
        </div>
        </>
    )
}

export default FeaturedPostPillLoading
