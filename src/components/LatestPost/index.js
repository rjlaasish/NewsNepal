import React, { useState } from 'react'
import './style.css'
import SectionHeading from '../SectionHeading'
import SwipeableViews from 'react-swipeable-views';
import latestpostImage from '../../assets/images/latest.jpg'
import coronavirus from '../../assets/images/coronavirus.jpg'
import dead from '../../assets/images/dead.jpg'
import muslim from '../../assets/images/muslim.jpg'
import hatya from '../../assets/images/hatya.jpg'




const LatestPost = () => {

    const [index,setIndex]=useState(0);
    const handleIndexChange = (index) => {
        // console.log(index);
        setIndex(index);
      };
    const Item = (props) => {
        return (
            <div className="latest-news-section">
                           <img src={props.image} alt=""/>
                           <div className="black-gradient">
                               <div className="text-section">
        <h2 className="latest-news-title">{props.title}</h2>
        <p className="latest-news-desc">{props.desc}</p>
                               </div>
                           </div>
                       </div>
        );
      };

    return (
        <div className="latest-post">
                <SectionHeading head="Latest"/>    
                <SwipeableViews index={index} onChangeIndex={handleIndexChange}>
        <Item
          image={latestpostImage}
          title="बालुवाटारमा ओली, दाहाल र देउवाबीच छलफल सुरु"
          desc="काठमाडौँ — कांग्रेस सभापति शेरबहादुर देउवा प्रधानमन्त्री केपी शर्मा ओलीलाई भेट्न बालुवाटार 
          पुगेका छन् । सोमबार नेकपाको सचिवालय बैठक सकिएसँगै सभापति शेरबहादुर देउवा बालुवाटार..."
        ></Item>
        <Item
          image={coronavirus}
          title="चितवनमा सशस्त्र प्रहरीका ४२ जनासहित ५० जनामा कोरोना पुष्टि"
          desc="चितवनमा सशस्त्र प्रहरीका ४२ जनासहित थप ५० जनामा कोर‍ोना संक्रमण पुष्टि भएको छ।
          पूर्वीचितवनको राप्ती नगरपालिका–६"
        ></Item>
        <Item
          image={dead}
          title="बाँकेमा ६२ वर्षीय पुरूषको कोरोनाबाट मृत्यु, नेपालको मृतक संख्या १०९ पुग्यो"
          desc="बाँकेमा एकजना कोरोना संक्रमितको मृत्यु भएको छ। नेपालगन्ज उपमहानगरपालिका वडा नं. ५ निवासी ६२ वर्षीय पुरुषको नेपालगन्ज 
          मेडिकल कलेजमा उपचारका क्रममा सोमबार राति पौने १२ बजेतिर मृत्यु भएको छ।"
        ></Item>
        <Item
          image={muslim}
          title="मुस्लिम छिमेकीले हिन्दु मलामीको कपाल मुण्डन गरेको तस्बिर पछाडिको कथा"
          desc="सामाजिक सञ्जालमा आइतबारदेखि एउटा तस्बिरको चर्चा छ।
          कालो मास्क, सेतो टोपी लगाएका एक मानिसले अर्का एक जनाको कपाल खौरिएको फोटोमा देखिन्छ।"
        ></Item>
        <Item
          image={hatya}
          title="तीन महिनाकी गर्भवती महिलाको हत्या आरोपमा पति र सासु पक्राउ"
          desc="गर्भवती महिलाको हत्या गरेको आरोपमा सिरहा प्रहरीले पति र सासूलाई पक्राउ गरेको छ।

          सिरहा नगरपालिका–१६ निवासी १९ वर्षीया कुलतीदेवी दासको हत्या आरोपमा उनका २० वर्षीय पति धीरज दास र सासू ३५ वर्षीया राजकुमारी दासलाई प्रहरीले पक्राउ गरेको हो।"
        ></Item>
        
      </SwipeableViews>
    
                   <div className="pagination">
                       <div className={`dots ${index===0 && "active"}`}></div>
                       <div className={`dots ${index===1 && "active"}`}></div>
                       <div className={`dots ${index===2 && "active"}`}></div>
                       <div className={`dots ${index===3 && "active"}`}></div>
                       <div className={`dots ${index===4 && "active"}`}></div>
                       
                   </div>
        </div>
    )
}

export default LatestPost
