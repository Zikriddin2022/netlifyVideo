import React from 'react';
import videoBg1 from "../assets/videoBg1.mp4"
import videoBg2 from "../assets/videoBg2.mp4"
import Register3 from "../assets/Register3.mp4"
import Register2 from "../assets/Register2.mp4"
import Register1 from "../assets/Register1.mp4"
import videoBg3 from "../assets/videoBg3.mp4"
import "./style.css"

function Videos({videos}) {
    console.log(videos);
  return (

    <div className='videos'>
      <div className='video'>
      <video src={videoBg1} autoPlay loop muted  controls/>
      <video src={videoBg2} loop muted  controls/>
      <video src={videoBg3} loop muted  controls/>
      <video src={Register1} loop muted  controls/>
      <video src={Register2} loop muted  controls/>
      <video src={Register3} loop muted  controls/>
      </div>
      
    </div>
  );
}

export default Videos;
