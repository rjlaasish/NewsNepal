import React from 'react'
import './style.scss'

const FeaturedPostPill = ({newssrcicon,newssrc,newshead,newsdesc,newsimg}) => {
    return (
        <>
        <div className="news-wrapper">
            <div className="featured-news">
            <div className="news-src-head">
                <img src={newssrcicon} alt=""/>
                <h4 className="news-src">{newssrc}</h4>
            </div>
            <h4 className="featured-news-head">
            {newshead}
            </h4>
            <p className="news-desc">{newsdesc}</p>
            </div>
            <div className="newsimg">
                <img src={newsimg} alt=""/>
            </div>
        </div>
        </>
    )
}

export default FeaturedPostPill
