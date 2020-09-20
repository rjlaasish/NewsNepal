import React from "react";
import { useHistory } from "react-router-dom";
import ispiner from '../../assets/images/ispinner.jpg';
import "./style.scss";

function DetailNews(props) {
  const data = props.location.data;

const history=useHistory();

  const checkNullObject=(datas)=>{
    if(datas === undefined){
        return true;
    } else{
        return false;
    }
}


  return (
    <>


{!checkNullObject(data) &&
    <>
    <div className="back-icon" onClick={()=>history.push('/')}><h2 className="icon"> &#8617; </h2></div>
    <img className="news-image" src={data.newsImage?data.newsImage:ispiner} alt="" />
      <div className="news-descr">
        <h2 className="detail-news-title">{data.title}</h2>
        <p className="detail-news-description">{data.description}</p>
      </div></>}

{checkNullObject(data) && history.push('/')}

    </>
  );
}

export default DetailNews;
