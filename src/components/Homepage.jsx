import React from "react";
import Navbar from "./Navbar";
import { sliders } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Homepage() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    easing: "linear",
    fade: false,
    autoplaySpeed: 3000,
  };
  return (
    <div className="homepage" id="Home">
      <Navbar />
      <div className="w-full h-[50%] m-auto">
        <Slider {...settings}>
          {sliders.map((slide) => (
            <div key={slide.id} className="slider">
              <img className="slider_image" src={slide.image} alt="slides" />
              <p className="text_slider text-2xl font-semibold text-center m-auto text-white p-8">
                {slide.text}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Homepage;
