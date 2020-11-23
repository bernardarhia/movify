import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Axios from 'axios';
import localForage from 'localforage';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min:0},
    items: 1
  },
 
};
const Slider = ()=>{
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  useEffect(()=>{

    const getRecommended = async ()=>{
      // check if localForage had recommended
    const localForageRecommended = await localForage.getItem('recommended');
    console.log(localForageRecommended.results);
    setRecommendedMovies(localForageRecommended.results)
    if(!localForageRecommended){
      console.log('not der');
      const fetchItems = await Axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=77e8d7def6af64532e8616ab67f7735b');
      localForage.setItem('recommended',fetchItems.data);
    }

  }
  getRecommended()

  },[])

  return (
    <div className="slider">
      <h1 className="head">Trending</h1>
<Carousel responsive={responsive}
draggable={true}
// ssr={true} // means to render carousel on server-side.
infinite={true}
autoPlay={true}
autoPlaySpeed={2000}
customTransition="all .5"
transitionDuration={1000}
>
 
  <div className="slider__card">
    <img src="https://www.pexels.com/photo/5425710/download/?search_query=&tracking_id=9c5h6odcgud" alt=""/>
  </div>
</Carousel>
    </div>
  )
}


export default Slider;