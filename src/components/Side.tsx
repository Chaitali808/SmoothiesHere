import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Side.css";

const Side = ({
  className = "",
  pngTransparentSmoothieMil,
  m,
  onLinearContainerClick,
  onAImageClick,
  onPngTransparentSmoothieMilksImageClick,
  onMImageClick,
}) => {
  const navigate = useNavigate();

  const onAImageClick1 = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onChImageClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onPngTransparentSmoothieMilksImageClick1 = useCallback(() => {
    navigate("/7");
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

  return (
    <div className={`side1 ${className}`}>
      <div className="side-item" />
      <div className="menu-panel">
        <div className="menu-panel-child" />
        <div className="fresh-smoothie1">Fresh Smoothie</div>
      </div>
      <div className="sub-menu-panel">
        <div className="linear1" onClick={onLinearContainerClick}>
          <img
            className="a-icon1"
            alt=""
            src="/4a@2x.png"
            onClick={onAImageClick}
          />
          <img
            className="ch-icon1"
            loading="lazy"
            alt=""
            src="/7ch@2x.png"
            onClick={onChImageClick}
          />
          <img
            className="png-transparent-smoothie-milks-icon1"
            loading="lazy"
            alt=""
            src={pngTransparentSmoothieMil}
            onClick={onPngTransparentSmoothieMilksImageClick}
          />
          <img
            className="k-icon1"
            loading="lazy"
            alt=""
            src="/6k@2x.png"
            onClick={onKImageClick}
          />
          <img
            className="s3-icon1"
            loading="lazy"
            alt=""
            src="/s3@2x.png"
            onClick={onS3ImageClick}
          />
          <img className="m-icon1" alt="" src={m} onClick={onMImageClick} />
          <img
            className="b-icon1"
            loading="lazy"
            alt=""
            src="/1b1@2x.png"
            onClick={onBImageClick}
          />
        </div>
      </div>
    </div>
  );
};

Side.propTypes = {
  className: PropTypes.string,
  pngTransparentSmoothieMil: PropTypes.string,
  m: PropTypes.string,

  /** Action props */
  onLinearContainerClick: PropTypes.func,
  onAImageClick: PropTypes.func,
  onPngTransparentSmoothieMilksImageClick: PropTypes.func,
  onMImageClick: PropTypes.func,
};

export default Side;
