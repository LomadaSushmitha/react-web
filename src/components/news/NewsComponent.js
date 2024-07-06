import React ,{useState,useEffect} from "react";
//import videoData from '../../models/videos.json';

function NewsComponent() {

  const[news , setnews]=useState([])
  useEffect(()=>{
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d880f4bb2b7491cbca4e27fc1843544git')
  .then(response=>response.json())
  .then(data=>setnews(data.articles))
  .catch(error=>console.error("problem with fetching data!!",error))
  },[])


  return (
    <div>
        <div className='container'>
            <div className='row'>
                {
                    news.map((value,key) => (
                      
                        <div key={key} className='col-2'>
                          <a href={value.url}>
                            <div className="card">
                                <img
                                 src={value.urlToImage} 
                               
                                alt={value.title}
                                 />
                                <div className='card-body'>
                                    <h4 className='card-title'>{value.author}</h4>
                                    <p className='card-text'>{value.title}</p>
                                    
                                </div>
                            
                        </div>
                        </a>
                    </div>
                   
                 ))
            }
        </div>
     </div>
     </div>
  )
  
}
export default NewsComponent;