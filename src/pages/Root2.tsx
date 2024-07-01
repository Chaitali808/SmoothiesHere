import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PageContent from "../components/PageContent";
import "./Root2.css";

const Root2 = () => {
  const navigate = useNavigate();

  const onLinearContainerClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onChImageClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onKImageClick = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onBImageClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className="root2">
      <FrameComponent
        a="/4a@2x.png"
        ch="/7ch@2x.png"
        k="/6k@2x.png"
        s3="/s31@2x.png"
        m="/2m@2x.png"
        b="/1b1@2x.png"
        onLinearContainerClick={onLinearContainerClick}
        onChImageClick={onChImageClick}
        onKImageClick={onKImageClick}
        onBImageClick={onBImageClick}
      />
      <div className="root-child" />
      <PageContent />
      <div className="image-carousel">
        <img
          className="pizza-rotator-icon2"
          alt=""
          src="/pizza-rotator@2x.png"
        />
        <img
          className="image-4-icon"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
        <img
          className="image-3-icon"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
    </div>
  );
};

export default Root2;
