import React from 'react'
import rightArrow from '../../assets/images/rightArrow.svg'
import './style.scss'

const SectionHeading = ({head}) => {
    return (
       <>
       <div className="head">
           <h3 className="title">{head}</h3>
           <div className="round">
    
               <img src={rightArrow} alt=""/>
           </div>
       </div>
       </>
    )
}

export default SectionHeading
