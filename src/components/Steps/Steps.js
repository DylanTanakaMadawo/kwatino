import React from "react";

import "./Steps.css";

export const Steps = () => {
  return (
    <div className="steps-container">
      <h1>Easy To Use!</h1>
      <div className="inner-steps">
        <div className="steps">
          <div className="shop">
            <div className="image-container">
              <img src="" alt="icon" />
            </div>
            <h3>Shop for your favourite drinks</h3>
            <p>
              Compare prices on your favorites, soon-to-be favorites, and the
              rare stuff, too
            </p>
          </div>
        </div>

        <div className="steps">
          <div className="address">
            <div className="image-container">
              <img src="" alt="icon" />
            </div>
            <h3>Enter your address</h3>
            <p>
              See what’s available for delivery now or later near you. Send a
              gift or treat yourself.
            </p>
          </div>
        </div>

        <div className="steps">
          <div className="delivery">
            <div className="image-container">
              <img src="" alt="icon" />
            </div>
            <h3>Sit back and relax</h3>
            <p>
              Stay in the moment with beer, wine, and spirits delivered. It’s
              not magic, but it’s close.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
