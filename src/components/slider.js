import './slider.css';

import React from "react";
import Slider from "react-slick";
import Webimg from "../assets/imgggg.jpg"
import Kasimg from "../assets/kashmirimg.jpeg"
import Lonimg from "../assets/londonimf.jpeg"
import Malimg from "../assets/maldives-ile-beach-sun-38238.jpeg"
import Neyimg from "../assets/newyork1.jpeg"
import Neywimg from "../assets/newyork2.jpeg"
import Parimg from "../assets/paris1.jpeg"
import Pariimg from "../assets/paris2.jpeg"


const Carousel = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplay:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='carosel'>
      <h1>Our Recent Trip</h1>
      <Slider {...settings}>
        <div>
          <img
            src={Webimg}
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src={Kasimg}
            alt="Slide 2"
           
          />
        </div>
        <div>
          <img
            src={Malimg}
            alt="Slide 3"
           
          />
        </div>
        <div>
          <img
            src={Lonimg}
            alt="Slide 4"
           
          />
        </div>

        <div>
          <img
            src={Parimg}
            alt="Slide 5"
           
          />
        </div>
        <div>
          <img
            src={Pariimg}
            alt="Slide 6"
           
          />
        </div>
        <div>
          <img
            src={Neyimg}
            alt="Slide 7"
           
          />
        </div>
        <div>
          <img
            src={Neywimg}
            alt="Slide 8"
           
          />
        </div>
        <div>
          <img
            src={Malimg}
            alt="Slide 9"
           
          />
        </div>

      </Slider>
    </div>
  );
};

export default Carousel;
