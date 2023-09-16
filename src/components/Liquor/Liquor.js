import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Liquor.css";
import { LiquorCard } from "../LiquorCard/LiquorCard";

import { LIQ } from "../../Data";

export const Liquor = () => {
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
    <div id="liquor" className="liq">
      <h1>Liquor</h1>
      <Carousel responsive={responsive}>
        {LIQ.map((product) => (
          <LiquorCard data={product} />
        ))}
      </Carousel>
    </div>
  );
};
