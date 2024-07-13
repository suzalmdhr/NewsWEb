import React from 'react'

export default function NewsItem(props) {

  const dates=new Date(props.time);
 
  const formattedDate = dates.toLocaleString();
console.log(formattedDate); 
  return (
   <>
   
   <div className="card my-2" style={{width:"18rem"}}>
  <img src={props.src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.desc}...</p>
    <p classname="card-text"><small classname="text-body-secondary">By {props.author?props.author:"unknown"} at {formattedDate}</small></p>
    <a href={props.newsUrl} target='_blank' className="btn btn-primary">Go somewhere</a>
  </div>
</div>

   </>
  )
}
