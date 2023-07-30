import React from 'react'
import {Carousel} from "react-responsive-carousel";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Services = () => {
  return (
    <div>

        <Carousel 
        infiniteLoop 
        autoPlay 
        showStatus ={false}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        interval={1000}
        >

        <div>
            <img src={img3} alt="Item1" />
            <p className='legend'>Full Stack</p>
        </div>

        <div>
            <img src={img4} alt="Item3" />
            <p className='legend'>Peer-to- peer Support</p>
        </div>


        </Carousel>

    </div>
  )
}

export default Services;