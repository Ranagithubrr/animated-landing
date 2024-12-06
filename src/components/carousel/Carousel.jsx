import React from 'react';
import SliderImage from '../../assets/img/expanded-slider-image.jpg'

const Carousel = () => {
    const items = [
        { imageSource: SliderImage, text: 'GEEKS' },
        { imageSource: SliderImage, text: 'For' },
        { imageSource: SliderImage, text: 'GEEKS' },
        { imageSource: SliderImage, text: 'GEEKS' },
        { imageSource: SliderImage, text: 'GEEKS' },
        { imageSource: SliderImage, text: 'GEEKS' },
        { imageSource: SliderImage, text: 'GEEKS' },
        { imageSource: SliderImage, text: 'GEEKS' },
        { imageSource: SliderImage, text: 'GEEKS' },
      ];
  return (
    <div className="relative max-w-screen-xl h-[254px] mx-auto rounded-md flex gap-[5px] p-[.4em] bg-[#7FB77E]">
      {items.map((item, index) => (
        <p
          key={index}
          className="flex-1 h-full overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-[#7FB77E] border-2 border-[#42032C] flex justify-center items-center hover:grow-[4]"
          style={{
            backgroundImage: `url(${item.imageSource})`, // Dynamically set the background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span className="min-w-[14em] p-[.5em] text-center transform rotate-[-90deg] transition-all duration-500 uppercase text-[#42032C] tracking-[.1em]">
            {item.text} {/* Dynamically set the text */}
          </span>
        </p>
      ))}
    </div>
  );
};

export default Carousel;
