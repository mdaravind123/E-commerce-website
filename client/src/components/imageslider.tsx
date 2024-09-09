import React from "react";
// import Slider from "react-slick";
import { banner1 } from "../assets/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Imageslider: React.FC = () => {
  // const images: string[] = [banner1, banner2, banner3, banner4];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true,
  //   arrows: true,
  // };

  return (
    <div className="relative w-[90%] mx-auto p-3 mt-4">
      {/* <Slider {...settings}>
        {images.map((image, idx) => (
          <div key={idx} className="w-full h-[500px]">
            <img
              src={image}
              alt={`banner-${idx}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider> */}
      <img src={banner1} alt="Hero Section" className="w-[100%] h-[80vh]" />
    </div>
  );
};

export default Imageslider;
