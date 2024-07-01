import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <header className={`frame-header ${className}`}>
      <div className="frame-div">
        <nav className="home-group">
          <a className="home4" onClick={onHOMETextClick}>
            HOME
          </a>
          <nav className="frame-nav">
            <div className="speciality-wrapper1">
              <a className="speciality4">SPECIALITY</a>
            </div>
            <a className="about-us4">ABOUT US</a>
            <a className="contact4">CONTACT</a>
          </nav>
        </nav>
        <div className="frame-wrapper1">
          <div className="frame-parent1">
            <div className="frame-parent2">
              <div className="select-your-favourite-smootie-wrapper">
                <h3 className="select-your-favourite2">
                  Select your Favourite Smootie
                </h3>
              </div>
              <div className="blueberry-lavender-smoothie-go-wrapper">
                <h2 className="blueberry-lavender-smoothie-container2">
                  <p className="blueberry-lavender-smoothie2">
                    BlueBerry Lavender Smoothie
                  </p>
                  <p className="golden-mango-bliss2">
                    Golden Mango Bliss Smoothie
                  </p>
                  <p className="raspberry-radiance-smoothie2">
                    Raspberry Radiance Smoothie
                  </p>
                  <p className="apple-orchard-delight2">
                    Apple Orchard Delight Smoothie
                  </p>
                  <p className="kiwi-mint-breeze2">Kiwi Mint Breeze Smoothie</p>
                  <p className="strawberry-sunshine-smoothie2">
                    Strawberry Sunshine Smoothie
                  </p>
                  <p className="choco-bliss-smoothie2">Choco Bliss Smoothie</p>
                </h2>
              </div>
            </div>
            <div className="frame-wrapper2">
              <div className="indulge-in-the-serene-harmony-frame">
                <div className="indulge-in-the-container3">
                  <p className="indulge-in-the6">
                    Indulge in the serene harmony of ripe blueberries and
                    delicate lavender. This blend offers the natural sweetness
                    of blueberries rich in antioxidants, paired with the calming
                    essence of lavender. Perfect for a morning boost or an
                    afternoon delight, it's a refreshing balance of nature's
                    finest.
                  </p>
                  <p className="blank-line18">&nbsp;</p>
                  <p className="savor-the-tropical3">
                    Savor the tropical delight of our Golden Mango Bliss
                    Smoothie. Bursting with the vibrant sweetness of sun-ripened
                    mangoes, each sip is a journey to paradise. Rich in vitamins
                    and antioxidants, this smoothie is as nourishing as it is
                    delicious. Perfect for a refreshing start to your day or a
                    rejuvenating afternoon treat.
                  </p>
                  <p className="blank-line19">&nbsp;</p>
                  <p className="experience-the-vibrant3">
                    Experience the vibrant taste of our Raspberry Radiance
                    Smoothie. Each sip is a burst of tangy-sweet raspberries,
                    packed with antioxidants and vitamins. This refreshing blend
                    is perfect for a revitalizing start to your day or a
                    delicious afternoon pick-me-up. Enjoy the radiant flavor and
                    nourishment in every glass.
                  </p>
                  <p className="blank-line20">&nbsp;</p>
                  <p className="delight-in-the3">
                    Delight in the crisp, refreshing taste of our Apple Orchard
                    Delight Smoothie. Each sip offers the natural sweetness of
                    fresh apples, rich in fiber and vitamins. This wholesome
                    blend is perfect for a revitalizing start to your morning or
                    a refreshing afternoon treat. Enjoy the essence of an apple
                    orchard in every glass.
                  </p>
                  <p className="blank-line21">&nbsp;</p>
                  <p className="refresh-yourself-with3">
                    Refresh yourself with the invigorating taste of our Kiwi
                    Mint Breeze Smoothie. This delightful blend combines the
                    tangy sweetness of ripe kiwis with the cool, refreshing
                    essence of mint. Perfect for a revitalizing morning boost or
                    a refreshing afternoon treat, it’s a burst of freshness in
                    every sip.
                  </p>
                  <p className="blank-line22">&nbsp;</p>
                  <p className="bask-in-the3">
                    Bask in the radiant flavors of our Strawberry Sunshine
                    Smoothie. Overflowing with the luscious sweetness of
                    sun-ripened strawberries, this smoothie is a delicious
                    source of vitamins and antioxidants. Ideal for a bright
                    start to your day or a sweet afternoon pick-me-up, it’s pure
                    sunshine in a glass.
                  </p>
                  <p className="blank-line23">&nbsp;</p>
                  <p className="indulge-in-the7">
                    Indulge in the rich, velvety delight of our Choco Bliss
                    Smoothie. Blending creamy chocolate with nourishing
                    ingredients, each sip is a decadent treat that's also packed
                    with nutrients. Perfect for a satisfying start to your day
                    or a luxurious afternoon indulgence, it’s pure bliss in a
                    glass.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
