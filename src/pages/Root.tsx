import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Root.css";

const Root = () => {
  const navigate = useNavigate();

  const onSPECIALITYTextClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className="root">
      <section className="navigation">
        <header className="side-parent">
          <img className="side-icon" loading="lazy" alt="" src="/side@2x.png" />
          <nav className="frame-wrapper">
            <nav className="home-parent">
              <a className="home">HOME</a>
              <div className="speciality-wrapper">
                <a className="speciality" onClick={onSPECIALITYTextClick}>
                  SPECIALITY
                </a>
              </div>
              <div className="about-contact">
                <a className="about-us">ABOUT US</a>
                <a className="contact">CONTACT</a>
              </div>
            </nav>
          </nav>
        </header>
        <div className="navigation-inner">
          <div className="frame-parent">
            <div className="frame-container">
              <div className="season-special-parent">
                <div className="season-special">{` Season Special `}</div>
                <div className="frame-group">
                  <div className="smoothies-that-everyone-loves-parent">
                    <div className="smoothies-that-everyone-container">
                      <p className="smoothies-that">
                        <b>Smoothies that</b>
                      </p>
                      <p className="everyone-loves">Everyone Loves !</p>
                    </div>
                    <div className="blend-your-day-with-flavors-wrapper">
                      <div className="blend-your-day">
                        Blend Your Day with Flavors.
                      </div>
                    </div>
                  </div>
                  <div className="explore-wrapper">
                    <div className="explore" onClick={onSPECIALITYTextClick}>
                      <div className="button-background" />
                      <b className="explore1">Explore</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-photo">
              <div className="images">
                <img className="image-16-icon" alt="" src="/image-16@2x.png" />
                <img
                  className="image-15-icon"
                  loading="lazy"
                  alt=""
                  src="/image-15@2x.png"
                />
                <img className="image-14-icon" alt="" src="/image-14@2x.png" />
                <img className="image-12-icon" alt="" src="/image-12@2x.png" />
                <div className="image-10" />
                <img className="image-13-icon" alt="" src="/image-13@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className="background-icon" alt="" src="/background@2x.png" />
    </div>
  );
};

export default Root;
