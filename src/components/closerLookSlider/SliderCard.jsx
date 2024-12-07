import React from "react";

import bgImg from "../../assets/img/2.jpg";

const SliderCard = ({ date, title, background }) => {
  return (
    <div
      className="relative bg-cover h-[500px] rounded-3xl p-10 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${background || bgImg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20 rounded-3xl"></div>
      <p className="z-10 text-lg text-gray-100">{date}</p>
      <p
        className="z-10 text-3xl text-gray-100"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
      >
        {title}
      </p>
      <a href="#" className="z-10 text-gray-300 underline">
        Read the article
      </a>
    </div>
  );
};

export default SliderCard;
