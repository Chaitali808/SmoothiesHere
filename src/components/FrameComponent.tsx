import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  a,
  ch,
  k,
  s3,
  m,
  b,
  onLinearContainerClick,
  onAImageClick,
  onChImageClick,
  onKImageClick,
  onS3ImageClick,
  onBImageClick,
}) => {
  const navigate = useNavigate();

  const onAImageClick1 = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onChImageClick1 = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onPngTransparentSmoothieMilksImageClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onKImageClick1 = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onS3ImageClick1 = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onMImageClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div className={`rectangle-parent ${className}`}>
      <div className="frame-child" />
      <div className="content-wrapper">
        <div className="content-wrapper-child" />
        <div className="fresh-smoothie">Fresh Smoothie</div>
      </div>
      <div className="smoothie-list">
        <div className="linear" onClick={onLinearContainerClick}>
          <img className="a-icon" alt="" src={a} onClick={onAImageClick} />
          <img
            className="ch-icon"
            loading="lazy"
            alt=""
            src={ch}
            onClick={onChImageClick}
          />
          <img
            className="png-transparent-smoothie-milks-icon"
            loading="lazy"
            alt=""
            src="/pngtransparentsmoothiemilkshakejuiceicecreamdrinkjuicecreamfoodstrawberriesremovebgpreview-2@2x.png"
            onClick={onPngTransparentSmoothieMilksImageClick}
          />
          <img
            className="k-icon"
            loading="lazy"
            alt=""
            src={k}
            onClick={onKImageClick}
          />
          <img
            className="s3-icon"
            loading="lazy"
            alt=""
            src={s3}
            onClick={onS3ImageClick}
          />
          <img className="m-icon" alt="" src={m} onClick={onMImageClick} />
          <img
            className="b-icon"
            loading="lazy"
            alt=""
            src={b}
            onClick={onBImageClick}
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  a: PropTypes.string,
  ch: PropTypes.string,
  k: PropTypes.string,
  s3: PropTypes.string,
  m: PropTypes.string,
  b: PropTypes.string,

  /** Action props */
  onLinearContainerClick: PropTypes.func,
  onAImageClick: PropTypes.func,
  onChImageClick: PropTypes.func,
  onKImageClick: PropTypes.func,
  onS3ImageClick: PropTypes.func,
  onBImageClick: PropTypes.func,
};

export default FrameComponent;
