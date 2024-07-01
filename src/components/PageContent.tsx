import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./PageContent.css";

const PageContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <section className={`page-content ${className}`}>
      <div className="navigation-parent">
        <div className="navigation1">
          <a className="home3" onClick={onHOMETextClick}>
            HOME
          </a>
          <div className="about-contact1">
            <div className="speciality-frame">
              <a className="speciality3">SPECIALITY</a>
            </div>
            <a className="about-us3">ABOUT US</a>
            <a className="contact3">CONTACT</a>
          </div>
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="hero-title-parent">
              <div className="hero-title">
                <h3 className="select-your-favourite">
                  Select your Favourite Smootie
                </h3>
              </div>
              <div className="hero-subtitle">
                <h2 className="blueberry-lavender-smoothie-container">
                  <p className="blueberry-lavender-smoothie">
                    BlueBerry Lavender Smoothie
                  </p>
                  <p className="golden-mango-bliss">
                    Golden Mango Bliss Smoothie
                  </p>
                  <p className="raspberry-radiance-smoothie">
                    Raspberry Radiance Smoothie
                  </p>
                  <p className="apple-orchard-delight">
                    Apple Orchard Delight Smoothie
                  </p>
                  <p className="kiwi-mint-breeze">Kiwi Mint Breeze Smoothie</p>
                  <p className="strawberry-sunshine-smoothie">
                    Strawberry Sunshine Smoothie
                  </p>
                  <p className="choco-bliss-smoothie">Choco Bliss Smoothie</p>
                </h2>
              </div>
            </div>
            <div className="hero-description">
              <div className="indulge-in-the-serene-harmony-container">
                <div className="indulge-in-the-container1">
                  <p className="indulge-in-the2">
                    Indulge in the serene harmony of ripe blueberries and
                    delicate lavender. This blend offers the natural sweetness
                    of blueberries rich in antioxidants, paired with the calming
                    essence of lavender. Perfect for a morning boost or an
                    afternoon delight, it's a refreshing balance of nature's
                    finest.
                  </p>
                  <p className="blank-line6">&nbsp;</p>
                  <p className="savor-the-tropical1">
                    Savor the tropical delight of our Golden Mango Bliss
                    Smoothie. Bursting with the vibrant sweetness of sun-ripened
                    mangoes, each sip is a journey to paradise. Rich in vitamins
                    and antioxidants, this smoothie is as nourishing as it is
                    delicious. Perfect for a refreshing start to your day or a
                    rejuvenating afternoon treat.
                  </p>
                  <p className="blank-line7">&nbsp;</p>
                  <p className="experience-the-vibrant1">
                    Experience the vibrant taste of our Raspberry Radiance
                    Smoothie. Each sip is a burst of tangy-sweet raspberries,
                    packed with antioxidants and vitamins. This refreshing blend
                    is perfect for a revitalizing start to your day or a
                    delicious afternoon pick-me-up. Enjoy the radiant flavor and
                    nourishment in every glass.
                  </p>
                  <p className="blank-line8">&nbsp;</p>
                  <p className="delight-in-the1">
                    Delight in the crisp, refreshing taste of our Apple Orchard
                    Delight Smoothie. Each sip offers the natural sweetness of
                    fresh apples, rich in fiber and vitamins. This wholesome
                    blend is perfect for a revitalizing start to your morning or
                    a refreshing afternoon treat. Enjoy the essence of an apple
                    orchard in every glass.
                  </p>
                  <p className="blank-line9">&nbsp;</p>
                  <p className="refresh-yourself-with1">
                    Refresh yourself with the invigorating taste of our Kiwi
                    Mint Breeze Smoothie. This delightful blend combines the
                    tangy sweetness of ripe kiwis with the cool, refreshing
                    essence of mint. Perfect for a revitalizing morning boost or
                    a refreshing afternoon treat, it’s a burst of freshness in
                    every sip.
                  </p>
                  <p className="blank-line10">&nbsp;</p>
                  <p className="bask-in-the1">
                    Bask in the radiant flavors of our Strawberry Sunshine
                    Smoothie. Overflowing with the luscious sweetness of
                    sun-ripened strawberries, this smoothie is a delicious
                    source of vitamins and antioxidants. Ideal for a bright
                    start to your day or a sweet afternoon pick-me-up, it’s pure
                    sunshine in a glass.
                  </p>
                  <p className="blank-line11">&nbsp;</p>
                  <p className="indulge-in-the3">
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
    </section>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
};

export default PageContent;
