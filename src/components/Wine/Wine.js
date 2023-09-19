import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Wine.css";
import { WineCard } from "../WineCard/WineCard";

import { WINE } from "../../Data";

export const Wine = () => {
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
    <div id="wine" className="wine-wine">
      <h1>Wine</h1>
      <Carousel removeArrowOnDeviceType={"mobile"} responsive={responsive}>
        {WINE.map((product) => (
          <WineCard data={product} />
        ))}
      </Carousel>
    </div>
  );
};
