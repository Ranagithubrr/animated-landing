import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
import "./slider.css";
import SliderCard from "./SliderCard";

import SliderImage1 from "../../assets/img/sliderImages/1.jpg";
import SliderImage2 from "../../assets/img/sliderImages/2.jpg";
import SliderImage3 from "../../assets/img/sliderImages/3.jpg";
import SliderImage4 from "../../assets/img/sliderImages/4.jpg";
import SliderImage5 from "../../assets/img/sliderImages/5.jpg";
import SliderImage6 from "../../assets/img/sliderImages/6.jpg";

const CloserLookSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderData = [
    {
      date: "Octobor 14, 2024",
      title: "Top 8 Benefits of Foreign Trade Zones",
    },
    {
      date: "Octobor 14, 2024",
      title: "Are Tariffs Truly Good for America?",
      backgorund: SliderImage1,
    },
    {
      date: "Octobor 14, 2024",
      title: "EPA Approved Warehouse & 3PL Offers All the Benefits Of A FTZ",
      backgorund: SliderImage2,
    },
    {
      date: "Octobor 14, 2024",
      title:
        "Unlocking Business Independenc: Tri-Link Inc.'s Success Story in Suffolk Country's Foreign Trade zone",
      backgorund: SliderImage3,
    },
    {
      date: "Octobor 14, 2024",
      title: "How to Fastract Your FTZ Solution",
      backgorund: SliderImage4,
    },
    {
      date: "Octobor 14, 2024",
      title: "FTZ vs Bonded Warehouse",
      backgorund: SliderImage5,
    },
  ];

  return (
    <div className="relative py-8 pb-20 mx-auto border-b-2 slider-container">
      <h4 className="my-8 mb-24 text-5xl text-center text-brand-primary">
        A Closer Look
      </h4>
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((ele, index) => {
          return (
            <div className="p-4" key={index}>
              <SliderCard date={ele.date} title={ele.title} background={ele.backgorund}/>
            </div>
          );
        })}
      </Slider>
      <div className="arrow-container">
        <div
          className="custom-arrow prev-arrow"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <BiSolidLeftArrowAlt size={30} />
        </div>
        <div
          className="custom-arrow next-arrow"
          onClick={() => sliderRef.current.slickNext()}
        >
          <BiSolidRightArrowAlt size={30} />
        </div>
      </div>
    </div>
  );
};

export default CloserLookSlider;
