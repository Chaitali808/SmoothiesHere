import Content from "./Content";
import PropTypes from "prop-types";
import "./Gallery.css";

const Gallery = ({ className = "" }) => {
  return (
    <div className={`gallery ${className}`}>
      <Content />
      <div className="blueberry-description">
        <div className="details-panel">
          <img
            className="blueberry-image-placeholder"
            loading="lazy"
            alt=""
            src="/3@2x.png"
          />
          <div className="home-button">
            <div className="image-row">
              <div className="blueberry-paragraph">
                <div className="indulge-in-the-container2">
                  <p className="indulge-in-the4">
                    Indulge in the serene harmony of ripe blueberries and
                    delicate lavender. This blend offers the natural sweetness
                    of blueberries rich in antioxidants, paired with the calming
                    essence of lavender. Perfect for a morning boost or an
                    afternoon delight, it's a refreshing balance of nature's
                    finest.
                  </p>
                  <p className="blank-line12">&nbsp;</p>
                  <p className="savor-the-tropical2">
                    Savor the tropical delight of our Golden Mango Bliss
                    Smoothie. Bursting with the vibrant sweetness of sun-ripened
                    mangoes, each sip is a journey to paradise. Rich in vitamins
                    and antioxidants, this smoothie is as nourishing as it is
                    delicious. Perfect for a refreshing start to your day or a
                    rejuvenating afternoon treat.
                  </p>
                  <p className="blank-line13">&nbsp;</p>
                  <p className="experience-the-vibrant2">
                    Experience the vibrant taste of our Raspberry Radiance
                    Smoothie. Each sip is a burst of tangy-sweet raspberries,
                    packed with antioxidants and vitamins. This refreshing blend
                    is perfect for a revitalizing start to your day or a
                    delicious afternoon pick-me-up. Enjoy the radiant flavor and
                    nourishment in every glass.
                  </p>
                  <p className="blank-line14">&nbsp;</p>
                  <p className="delight-in-the2">
                    Delight in the crisp, refreshing taste of our Apple Orchard
                    Delight Smoothie. Each sip offers the natural sweetness of
                    fresh apples, rich in fiber and vitamins. This wholesome
                    blend is perfect for a revitalizing start to your morning or
                    a refreshing afternoon treat. Enjoy the essence of an apple
                    orchard in every glass.
                  </p>
                  <p className="blank-line15">&nbsp;</p>
                  <p className="refresh-yourself-with2">
                    Refresh yourself with the invigorating taste of our Kiwi
                    Mint Breeze Smoothie. This delightful blend combines the
                    tangy sweetness of ripe kiwis with the cool, refreshing
                    essence of mint. Perfect for a revitalizing morning boost or
                    a refreshing afternoon treat, it’s a burst of freshness in
                    every sip.
                  </p>
                  <p className="blank-line16">&nbsp;</p>
                  <p className="bask-in-the2">
                    Bask in the radiant flavors of our Strawberry Sunshine
                    Smoothie. Overflowing with the luscious sweetness of
                    sun-ripened strawberries, this smoothie is a delicious
                    source of vitamins and antioxidants. Ideal for a bright
                    start to your day or a sweet afternoon pick-me-up, it’s pure
                    sunshine in a glass.
                  </p>
                  <p className="blank-line17">&nbsp;</p>
                  <p className="indulge-in-the5">
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
            <div className="about-contact2">
              <div className="selection-title">
                <div className="gallery-items">
                  <img
                    className="image-1-icon"
                    loading="lazy"
                    alt=""
                    src="/image-1@2x.png"
                  />
                  <img
                    className="placeholder-image-icon"
                    alt=""
                    src="/2@2x.png"
                  />
                </div>
              </div>
              <img
                className="image-2-icon"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
};

export default Gallery;
