import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi"; // Custom arrow icons
import "./slider.css";
import SliderCard from "./SliderCard";

const CloserLookSlider = () => {
  const sliderRef = useRef(null); // Use ref to access the slider instance

  const settings = {
    dots: false, // Enables navigation dots
    infinite: true, // Loops slides
    speed: 500, // Transition speed in ms
    slidesToShow: 2, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll
    prevArrow: (
      <div className="custom-arrow prev-arrow">
        <BiSolidLeftArrowAlt size={30} />
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow next-arrow">
        <BiSolidRightArrowAlt size={30} />
      </div>
    ),
  };

  return (
    <div className="relative py-8 pb-20 mx-auto border-b-2 slider-container">
      <Slider ref={sliderRef} {...settings}>
        <div className="p-4">
         <SliderCard />
        </div>
        <div className="p-4">
         <SliderCard />
        </div>
    
      </Slider>
      <div className="arrow-container">
        {/* Custom arrows outside the Slider component */}
        <div className="custom-arrow prev-arrow" onClick={() => sliderRef.current.slickPrev()}>
          <BiSolidLeftArrowAlt size={30} />
        </div>
        <div className="custom-arrow next-arrow" onClick={() => sliderRef.current.slickNext()}>
          <BiSolidRightArrowAlt size={30} />
        </div>
      </div>
    </div>
  );
};

export default CloserLookSlider;
