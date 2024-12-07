import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi"; // Custom arrow icons
import "./slider.css";

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
    <div className="relative py-8 mx-auto max-w-screen-2xl slider-container">
      <Slider ref={sliderRef} {...settings}>
        <div className="p-4">
          <h3 className="p-8 text-xl text-center bg-gray-200 rounded-lg">
            Slide 1
          </h3>
        </div>
        <div className="p-4">
          <h3 className="p-8 text-xl text-center bg-gray-200 rounded-lg">
            Slide 2
          </h3>
        </div>
        <div className="p-4">
          <h3 className="p-8 text-xl text-center bg-gray-200 rounded-lg">
            Slide 3
          </h3>
        </div>
        <div className="p-4">
          <h3 className="p-8 text-xl text-center bg-gray-200 rounded-lg">
            Slide 4
          </h3>
        </div>
        <div className="p-4">
          <h3 className="p-8 text-xl text-center bg-gray-200 rounded-lg">
            Slide 5
          </h3>
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
