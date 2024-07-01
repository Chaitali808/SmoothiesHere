import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "", propWidth, propPadding }) => {
  const contentStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div className={`content ${className}`} style={contentStyle}>
      <div className="selector-header">
        <h3 className="select-your-favourite1">
          Select your Favourite Smootie
        </h3>
      </div>
      <div className="smoothie-options">
        <h2 className="blueberry-lavender-smoothie-container1">
          <p className="blueberry-lavender-smoothie1">
            BlueBerry Lavender Smoothie
          </p>
          <p className="golden-mango-bliss1">Golden Mango Bliss Smoothie</p>
          <p className="raspberry-radiance-smoothie1">
            Raspberry Radiance Smoothie
          </p>
          <p className="apple-orchard-delight1">
            Apple Orchard Delight Smoothie
          </p>
          <p className="kiwi-mint-breeze1">Kiwi Mint Breeze Smoothie</p>
          <p className="strawberry-sunshine-smoothie1">
            Strawberry Sunshine Smoothie
          </p>
          <p className="choco-bliss-smoothie1">Choco Bliss Smoothie</p>
        </h2>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default Content;
