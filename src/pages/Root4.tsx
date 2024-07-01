import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import Content from "../components/Content";
import "./Root4.css";

const Root4 = () => {
  const navigate = useNavigate();

  const onLinearContainerClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onKImageClick = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onS3ImageClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onBImageClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onHOMETextClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className="root4">
      <div className="root-inner" />
      <FrameComponent
        a="/4a@2x.png"
        ch="/7ch1@2x.png"
        k="/6k@2x.png"
        s3="/s32@2x.png"
        m="/2m@2x.png"
        b="/1b2@2x.png"
        onLinearContainerClick={onLinearContainerClick}
        onAImageClick={onLinearContainerClick}
        onKImageClick={onKImageClick}
        onS3ImageClick={onS3ImageClick}
        onBImageClick={onBImageClick}
      />
      <img className="pizza-rotator-icon4" alt="" src="/pizza-rotator@2x.png" />
      <section className="navigation-container-wrapper">
        <div className="navigation-container">
          <div className="home-about-contact-wrapper">
            <div className="home-about-contact">
              <a className="home2" onClick={onHOMETextClick}>
                HOME
              </a>
              <div className="about-contact-container">
                <div className="speciality-container">
                  <a className="speciality2">SPECIALITY</a>
                </div>
                <a className="about-us2">ABOUT US</a>
                <a className="contact2">CONTACT</a>
              </div>
            </div>
          </div>
          <div className="selection-container-parent">
            <Content propWidth="773px" propPadding="0px 20px 0px 0px" />
            <div className="description-container-wrapper">
              <div className="description-container">
                <div className="description-container-inner">
                  <div className="indulge-in-the-serene-harmony-wrapper">
                    <div className="indulge-in-the-container">
                      <p className="indulge-in-the">
                        Indulge in the serene harmony of ripe blueberries and
                        delicate lavender. This blend offers the natural
                        sweetness of blueberries rich in antioxidants, paired
                        with the calming essence of lavender. Perfect for a
                        morning boost or an afternoon delight, it's a refreshing
                        balance of nature's finest.
                      </p>
                      <p className="blank-line">&nbsp;</p>
                      <p className="savor-the-tropical">
                        Savor the tropical delight of our Golden Mango Bliss
                        Smoothie. Bursting with the vibrant sweetness of
                        sun-ripened mangoes, each sip is a journey to paradise.
                        Rich in vitamins and antioxidants, this smoothie is as
                        nourishing as it is delicious. Perfect for a refreshing
                        start to your day or a rejuvenating afternoon treat.
                      </p>
                      <p className="blank-line1">&nbsp;</p>
                      <p className="experience-the-vibrant">
                        Experience the vibrant taste of our Raspberry Radiance
                        Smoothie. Each sip is a burst of tangy-sweet
                        raspberries, packed with antioxidants and vitamins. This
                        refreshing blend is perfect for a revitalizing start to
                        your day or a delicious afternoon pick-me-up. Enjoy the
                        radiant flavor and nourishment in every glass.
                      </p>
                      <p className="blank-line2">&nbsp;</p>
                      <p className="delight-in-the">
                        Delight in the crisp, refreshing taste of our Apple
                        Orchard Delight Smoothie. Each sip offers the natural
                        sweetness of fresh apples, rich in fiber and vitamins.
                        This wholesome blend is perfect for a revitalizing start
                        to your morning or a refreshing afternoon treat. Enjoy
                        the essence of an apple orchard in every glass.
                      </p>
                      <p className="blank-line3">&nbsp;</p>
                      <p className="refresh-yourself-with">
                        Refresh yourself with the invigorating taste of our Kiwi
                        Mint Breeze Smoothie. This delightful blend combines the
                        tangy sweetness of ripe kiwis with the cool, refreshing
                        essence of mint. Perfect for a revitalizing morning
                        boost or a refreshing afternoon treat, it’s a burst of
                        freshness in every sip.
                      </p>
                      <p className="blank-line4">&nbsp;</p>
                      <p className="bask-in-the">
                        Bask in the radiant flavors of our Strawberry Sunshine
                        Smoothie. Overflowing with the luscious sweetness of
                        sun-ripened strawberries, this smoothie is a delicious
                        source of vitamins and antioxidants. Ideal for a bright
                        start to your day or a sweet afternoon pick-me-up, it’s
                        pure sunshine in a glass.
                      </p>
                      <p className="blank-line5">&nbsp;</p>
                      <p className="indulge-in-the1">
                        Indulge in the rich, velvety delight of our Choco Bliss
                        Smoothie. Blending creamy chocolate with nourishing
                        ingredients, each sip is a decadent treat that's also
                        packed with nutrients. Perfect for a satisfying start to
                        your day or a luxurious afternoon indulgence, it’s pure
                        bliss in a glass.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="image-7-icon"
                  loading="lazy"
                  alt=""
                  src="/image-7@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Root4;
