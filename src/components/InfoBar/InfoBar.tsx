import React from 'react';
import './InfoBar.scss';
import FreeShipping from "../../assets/InfoBar/Item.png";
import MoneyGurantee from "../../assets/InfoBar/Item (1).png";
import Support from "../../assets/InfoBar/Item (2).png";
import payment from "../../assets/InfoBar/Item (3).png";

const InfoBar = () => {
  return (
    <section id="InfoBar">
        <br />
        <br />
        <div className="InfoBar">
            <div className="InfoBar-container d-f">
                <div className="IB-item item1">
                    <img src={FreeShipping} alt="" />
                </div>
                <div className="IB-item item2">
                    <img src={MoneyGurantee} alt="" />
                </div>
                <div className="IB-item item3">
                    <img src={Support} alt="" />
                </div>
                <div className="IB-item item4">
                    <img src={payment} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoBar