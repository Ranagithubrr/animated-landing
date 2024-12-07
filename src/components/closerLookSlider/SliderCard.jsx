import React from "react";

import bgImg from "../../assets/img/2.jpg";

const SliderCard = ({ date, title, url }) => {
  return (
    <div
      className="bg-cover h-[300px] rounded-3xl p-10 flex flex-col justify-between"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <p className="text-lg text-gray-100">Octobor 14, 2024</p>
      <p className="text-3xl text-gray-100" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
  Unlocking Business Independence: Tri-Link Inc.’s Success Story in
  Suffolk County’s Foreign Trade Zone
</p>
      <a href="#" className="text-gray-300 underline">Read the article</a>
    </div>
  );
};

export default SliderCard;
