import React from 'react';
import Hat from '../../assets/Featured/Image (1).png'
import WhiteTop from '../../assets/Featured/Image (2).png'
import Purse from '../../assets/Featured/Image (3).png'
import Slipper from '../../assets/Featured/Image (4).png'
import AuntyGlass from '../../assets/Featured/Image.png';
import "./FeaturedCollection.scss"

const FeaturedCollection = () => {
  return (
    <section id="FeaturedCollection">
        <br />
        <br />
        <div className="FeaturedCollection">
        <div className="FC-h">
                <h2>
                    Featured collections
                </h2>
            </div>
            <div className="FC-container ">
            <div className="FC-items item1">
                <div className="FCt-i-img">
                        <img src={Hat} alt="" />
                    </div>
                    <div className="FCt-i-button">
                        <p>
                        Accessories
                        </p>
                    </div>
            </div>
            <div className="FC-items item2">
                <div className="FCt-i-img">
                        <img src={AuntyGlass} alt="" />
                    </div>
                    <div className="FCt-i-button">
                        <p>
                        Glasses
                        </p>
                    </div>
            </div>
            <div className="FC-items item3">
                <div className="FCt-i-img">
                        <img src={WhiteTop} alt="" />
                    </div>
                    <div className="FCt-i-button">
                        <p>
                        Coats & Jackets
                        </p>
                    </div>
            </div>
            <div className="FC-items item4">
                <div className="FCt-i-img">
                        <img src={Purse} alt="" />
                    </div>
                    <div className="FCt-i-button">
                        <p>
                        Handbags
                        </p>
                    </div>
            </div>
            <div className="FC-items item5">
                <div className="FCt-i-img">
                        <img src={Slipper} alt="" />
                    </div>
                    <div className="FCt-i-button">
                        <p>
                        Sandals
                        </p>
                    </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollection