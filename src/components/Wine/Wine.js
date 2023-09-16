import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Wine.css";
import { WineCard } from "../WineCard/WineCard";

export const Wine = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="wine" className="wine-wine">
      <h1>Wine</h1>
      <Carousel responsive={responsive}>
        <WineCard />
        <WineCard />
        <WineCard />
        <WineCard />
        <WineCard />
        <WineCard />
        <WineCard />
        <WineCard />
      </Carousel>
    </div>
  );
};
