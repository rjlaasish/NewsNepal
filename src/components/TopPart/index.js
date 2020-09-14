import React, { useState } from 'react'
import './style.css'
import hamIcon from '../../assets/images/HamIcon.svg'
import searchIcon from '../../assets/images/search.svg'
import bellIcon from '../../assets/images/bell.svg'
import actionIcon from '../../assets/images/action.svg'
import ScrollableTabsButtonAuto from '../Tabs'


const TopPart = () => {

    return (
        <>

        <div className="top-part">
            <div className="top-decoration"></div>
            <div className="navbar">
                <div className="nav-items">
                    <img src={hamIcon} alt=""/>
                    <h3><span className="news">News</span><span className="nepal">Nepal</span></h3>
                    <div className="right-icons">
                        <img src={searchIcon} alt=""/>
                        <img src={bellIcon} alt=""/>
                        <img src={actionIcon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <ScrollableTabsButtonAuto/>
               
        </>
    )
}

export default TopPart
