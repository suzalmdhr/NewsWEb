import React from 'react'
import NewsItem from './NewsItem'
import { useState,useEffect } from 'react'
import { ClipLoader } from 'react-spinners';
import InfiniteScroll from 'react-infinite-scroll-component';



export default function News(props) {
    //

    let [articles,setArticles]=useState([]);
    let [page,setPage]=useState(1);
    let [totalArticles,setTotalArticles]=useState(0);
    let [loading,setLoading]=useState(true);
    

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }


    document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;

    

//    

let updateNews =async() => {
  setLoading(true);
    let res =await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9f933ecd1bde47f1941ba6b9c07a7046&page=${page}&pageSize=${props.pageSize}`)
   
    let data =await res.json();
  
    // setArticles(articles.concat(data.articles));
    setArticles(data.articles);
    setTotalArticles(data.totalResults);
    setLoading(false);
  
  
}

useEffect(() => {
  setArticles([]);
setPage(1);
           
  updateNews();


},[props.category])
    

    // let handleNext =async() => {
    //   if(page+1>Math.ceil(totalArticles/props.pageSize) ){

    //   }
    //   else{
    //   setPage(page+1);
    //   console.log(page);
    //   }
    // }
    

    // let handlePrevious =() => {
    //   setPage(page-1);

    // }

    

  // let  fetchMoreData =  () => {
  //     setPage(page +1)
      
      

     
    
  //   };

  let fetchMoreData =async() =>{
    
    setPage(page +1);
    let res =await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9f933ecd1bde47f1941ba6b9c07a7046&page=${page}&pageSize=${props.pageSize}`)
   
   
    let data =await res.json();
  
    // setArticles(articles.concat(data.articles));
    setArticles(articles.concat(data.articles));
   
    
    

  }
   
        


  return (
    <>
       <div className="container my-3">
        <h2 className='text-center'>Top {capitalizeFirstLetter(props.category)} headlines  </h2>

        <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    // inverse={true} //
    hasMore={articles.length < totalArticles}
    
    loader={
      <div className="text-center my-4">
      <ClipLoader />
  </div>
    }
    
  >


       
        <div className="row">
         
        {articles.map((article) => (
             <div className="col-md-4" key={article.url}>
             <NewsItem  src={article.urlToImage?article.urlToImage:"https://www.business-standard.com/assets/web-assets/images/Business_Standard_685x385.jpg"} author={article.author} time={article.publishedAt} title={article.title?article.title.slice(0,20):""} desc={article.description?article.description.slice(0,75):""} newsUrl={article.url}/>
             </div>
        ))}
        
        
        
       
        </div>
       
      
</InfiniteScroll>

{/* <div className="container d-flex justify-content-between">
  <button disabled={page<=1} type='button' onClick={handlePrevious} className="btn btn-dark">Previous</button>
  <button disabled={page+1>Math.ceil(totalArticles/props.pageSize)}  type='button' onClick={handleNext} className="btn btn-primary">Next</button>
</div> */}



        </div>
    </>
  )
}
