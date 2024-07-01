import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Side from "../components/Side";
import Gallery from "../components/Gallery";
import "./Root1.css";

const Root1 = () => {
  const navigate = useNavigate();

  const onAImageClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onPngTransparentSmoothieMilksImageClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onHOMETextClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className="root1">
      <Side
        pngTransparentSmoothieMil="/pngtransparentsmoothiemilkshakejuiceicecreamdrinkjuicecreamfoodstrawberriesremovebgpreview-2@2x.png"
        m="/2m@2x.png"
        onAImageClick={onAImageClick}
        onPngTransparentSmoothieMilksImageClick={
          onPngTransparentSmoothieMilksImageClick
        }
      />
      <img className="pizza-rotator-icon1" alt="" src="/pizza-rotator@2x.png" />
      <header className="home-title">
        <div className="header-panel">
          <nav className="description">
            <nav className="navigation-items">
              <a className="home1" onClick={onHOMETextClick}>
                HOME
              </a>
              <nav className="about-us-contact">
                <div className="speciality-panel">
                  <a className="speciality1">SPECIALITY</a>
                </div>
                <a className="about-us1">ABOUT US</a>
                <a className="contact1">CONTACT</a>
              </nav>
            </nav>
          </nav>
          <Gallery />
        </div>
      </header>
    </div>
  );
};

export default Root1;
