import React from "react";
import "./ShopWhatULove.scss";
import imgThis from "../../assets/ShopWhatULove/Image (5).png";

const ShopWhatULove = () => {
  return (
    <section id="ShopWhatULove">
        <br />
        <br />
      <div className="ShopWhatULove">
        <div className="SWL-container d-f">
          <div className="SWL-child">
            <img src={imgThis} alt="" />
          </div>
          <div className="SWL-child item2">
            <h2>Shop what you love!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <a href="#">Shop Collection</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopWhatULove;
