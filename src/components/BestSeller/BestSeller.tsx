import React from 'react';
import "./BestSeller.scss";
import glass from "../../assets/BestSeller/Image.png"
import gogle from "../../assets/BestSeller/gogle.png"
import shirt from "../../assets/BestSeller/shirt.png"
import top from "../../assets/BestSeller/Top.png"
import ColorPicker from '../../common/ColorPicker';
import Button from '../../common/Button';

const BestSeller = () => {
  return (
    <section id="BestSeller">
        <br />
        <br />
        <div className="BestSeller">
            <div className="BS-h">
                <h2>
                    Best Seller
                </h2>
            </div>

            <div className="Item-box d-f j-c-sb">
                <div className="ITbox-items">
                    <div className="it-i-img">
                        <img src={glass} alt="" />
                    </div>
                    <div className="it-i-title">
                    Rounded Sunglasses
                    </div>
                    <div className="it-i-price">
                    $62.38
                    </div>
                    <div className="it-i-colors">
                        <ColorPicker 
                        colors={['#FED700', '#836853', '#BFDBE3', '#FED1DD', '#8DB4D3']}
                        selectedColor="#ff0000"
                        // onColorChange={handleColorChange}
                        />
                    </div>
                </div>
                <div className="ITbox-items">
                    <div className="it-i-img">
                        <img src={shirt} alt="" />
                    </div>
                    <div className="it-i-title">
                    Linen-blend Shirt
                    </div>
                    <div className="it-i-price">
                    <span>$38.92</span> <span style={{textDecorationLine: "line-through"}} >$46.08</span>
                    </div>
                    <div className="it-i-colors">
                    <div className="it-i-colors">
                        <ColorPicker 
                        colors={['#FED700', '#836853', '#BFDBE3', '#FED1DD', '#8DB4D3']}
                        selectedColor="#ff0000"
                        // onColorChange={handleColorChange}
                        />
                    </div>
                    </div>
                </div>
                <div className="ITbox-items">
                    <div className="it-i-img">
                        <img src={top} alt="" />
                    </div>
                    <div className="it-i-title">
                    Boxy Denim Jacket
                    </div>
                    <div className="it-i-price">
                    $24.22
                    </div>
                    <div className="it-i-colors">
                    <div className="it-i-colors">
                        <ColorPicker 
                        colors={['#FED700', '#836853', '#BFDBE3', '#FED1DD', '#8DB4D3']}
                        selectedColor="#ff0000"
                        // onColorChange={handleColorChange}
                        />
                    </div>
                    </div>
                </div>
                <div className="ITbox-items">
                    <div className="it-i-img">
                        <img src={gogle} alt="" />
                    </div>
                    <div className="it-i-title">
                    Tinted Sunglasses
                    </div>
                    <div className="it-i-price">
                    $69.46
                    </div>
                    <div className="it-i-colors">
                    <ColorPicker 
                        colors={['#FED700', '#836853', '#BFDBE3', '#FED1DD', '#8DB4D3']}
                        selectedColor="#ff0000"
                        // onColorChange={handleColorChange}
                        />
                    </div>
                </div>
            </div>
            <div className="BS-b d-f j-c-c ">
                <Button >Shop Now</Button>
            </div>
        </div>
    </section>
  )
}

export default BestSeller