import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Beer.css";
import { BeerCard } from "../BeerCard/BeerCard";

import { BEER } from "../../Data";

export const Beer = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 850 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 850, min: 464 },
      items: 2.5,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1,
    },
  };
  return (
    <div id="beer" className="beer-beer">
      <h1>Beer</h1>
      <Carousel removeArrowOnDeviceType={"mobile"} responsive={responsive}>
        {BEER.map((product) => (
          <BeerCard data={product} />
        ))}
      </Carousel>
    </div>
  );
};
