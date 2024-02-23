import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
import "./Banner.css"
function Banner() {
    const [movie, setMovie] = useState()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[0])
    })
  }, [])  

  // const opts = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };
  
  // const handleBtn = (id)=>{
  //   console.log(id);
  //   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
  //     if(response.data.results.length!==0){
  //       setBtn(response.data.results[0])
  //     }else{
  //       console.log('Array Empty');
  //     }
  //   })
  // }

  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}  
    className='banner'>
        <div className='content'> 
            <h1 className='title'>{movie ? movie.title : ""}</h1>
              <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}
          
export default Banner