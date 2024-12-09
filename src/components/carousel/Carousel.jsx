import SliderImage from "../../assets/img/expanded-slider-image.jpg";
import SliderImage2 from "../../assets/img/2.jpg";
import SliderImage3 from "../../assets/img/3.avif";
import SliderImage4 from "../../assets/img/4.jpg";
import SliderImage5 from "../../assets/img/5.jpg";
import SliderImage6 from "../../assets/img/6.jpg";
import SliderImage7 from "../../assets/img/7.avif";
import SliderImage8 from "../../assets/img/8.avif";
import SliderImage9 from "../../assets/img/9.avif";

const Carousel = () => {
  const items = [
    { imageSource: SliderImage, text: "Apparel & Fashion" },
    { imageSource: SliderImage2, text: "Health, Beauty & Cosmetics" },
    { imageSource: SliderImage3, text: "Footwear & Footgear" },
    { imageSource: SliderImage4, text: "Kids Products & Toys" },
    { imageSource: SliderImage5, text: "Consumer Electronics" },
    { imageSource: SliderImage6, text: "Home Goods & Décor" },
    { imageSource: SliderImage7, text: "Food Items, Beverages, and Alcohol" },
    { imageSource: SliderImage8, text: "Construction Materials & Tires" },
    { imageSource: SliderImage9, text: "Raw Materials" },
  ];
  return (
    <div className="py-12">
     <h4 className="mb-8 text-3xl font-bold text-center text-brand-primary">Key Retail Products</h4>
      <div className="relative max-w-screen-xl px-10 2xl:max-w-screen-2xl h-[600px] mx-auto flex rounded-2xl overflow-hidden">
        {items.map((item, index) => (
          <p
            key={index}
            className="flex-1 h-full overflow-hidden cursor-pointer transition-all duration-500 flex justify-end items-center hover:grow-[8] lg:hover:grow-[4] rounded-lg"
            style={{
              backgroundImage: `url(${item.imageSource})`, 
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="min-w-[14em] p-[.5em] text-center transform rotate-[-90deg] transition-all duration-500 uppercase text-gray-200 font-semibold tracking-[.1em]">
              {item.text}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
