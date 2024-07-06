import React ,{ useState, useEffect } from "react";

function Video() {

  const[videos,setVideos] = useState([])
   
  useEffect(() => {
    fetch("videoData.json")
    .then(response => response.json())
    .then(data => setVideos(data))
    .catch(error => console.error("problem with fetching data!!",error))
  

  }, [])

  
    
  return(
    
       <div clasName="container">
         <div className="row">
           {
             videos.map((video,key) => (
               <div key={key} className="col-md-4">
                 <a href={`https://youtube.com//watch?v=${video.img_id}`}>
                   <div classname="card">
                     <img
                     src={`https://img.youtube.com/vi/${video.img_id}/0.jpg`}
                     className="img_thumbnail"
                     alt={video.title}
                     />
                     <div classname="card-body">
                       <h5 className="card-title">{video.title}</h5>
                       <p className="card-text">{video.channelName}</p>
                       <small>
                         {video.viewsCount} views - {video.likesCount} likes-
                         {video.duration}m
                        </small>
                      </div>
                    </div>
                  </a>    
                </div>
              ))
            }
          </div>
        </div>
  );
}

export default Video

//so it is running for everyone now