import React from 'react'
import { useState } from 'react'
import './style.scss'
import ispiner from '../../assets/images/ispinner.jpg';

const FeaturedPostPill = ({newssrcicon,newssrc,newshead,newsdesc,newsimg,onClicked}) => {

const [imageDetail,setImageDetail]=useState({
    error:false,
    loaded:false
})

const onImageError=()=>{
    setImageDetail({error:true})
}

const isImageLoaded=()=>{
setImageDetail({loaded:true})
}
let imgSrc =(!imageDetail.error)?newsimg:ispiner;
    return (
        <>
        <div className="news-wrapper" onClick={onClicked && onClicked} >
            <div className="featured-news">
            <div className="news-src-head">
                <img src={newssrcicon} alt=""/>
                <h4 className="news-src" >{newssrc}</h4>
            </div>
            <h4 className="featured-news-head">
            {newshead}
            </h4>
            <p className="news-desc">{newsdesc}</p>
            </div>
            <div className="newsimg">
               
               <img src={imgSrc} alt="loading" onLoad={isImageLoaded} onError={onImageError}/>
               {!imageDetail.loaded && <p>Loading...</p>}
            </div>
        </div>
        </>
    )
}

export default FeaturedPostPill
