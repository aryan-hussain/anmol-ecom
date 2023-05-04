import React from "react";
import Button from "../../common/Button";
import BannerImg from "../../assets/BG.png";
import "./Banner.scss"

const Banner = () => {
  return (
    <section id="Banner">
      <div className="Banner">
        <img src={BannerImg} alt={BannerImg} />

        <div className="Banner-text">
        <p>New Arrivals</p>
        <h2>Summer Outfits</h2>
        <Button>Shop Now</Button>
        </div>

        <div className="Banner-text-below">
          <span>Pink Dress | See Offers</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
