import React from "react";
import Slider from "react-slick";

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="p-4 featured">
      <h2>Featured products</h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt="mobiles"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80"
            alt="mobiles"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Featured;
