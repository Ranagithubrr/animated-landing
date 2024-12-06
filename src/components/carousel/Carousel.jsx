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
    { imageSource: SliderImage, text: "GEEKS" },
    { imageSource: SliderImage2, text: "For" },
    { imageSource: SliderImage3, text: "GEEKS" },
    { imageSource: SliderImage4, text: "GEEKS" },
    { imageSource: SliderImage5, text: "GEEKS" },
    { imageSource: SliderImage6, text: "GEEKS" },
    { imageSource: SliderImage7, text: "GEEKS" },
    { imageSource: SliderImage8, text: "GEEKS" },
    { imageSource: SliderImage9, text: "GEEKS" },
  ];
  return (
    <div>
     <h4 className="text-brand-primary text-3xl text-center font-bold my-8">Key Retail Products</h4>
      <div className="relative max-w-screen-xl h-[300px] mx-auto flex rounded-2xl overflow-hidden">
        {items.map((item, index) => (
          <p
            key={index}
            className="flex-1 h-full overflow-hidden cursor-pointer rounded-sm transition-all duration-500 flex justify-center items-center hover:grow-[4]"
            style={{
              backgroundImage: `url(${item.imageSource})`, // Dynamically set the background image
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="min-w-[14em] p-[.5em] text-center transform rotate-[-90deg] transition-all duration-500 uppercase text-[#42032C] tracking-[.1em]">
              {item.text} {/* Dynamically set the text */}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
