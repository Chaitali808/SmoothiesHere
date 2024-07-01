import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import "./Root6.css";

const Root6 = () => {
  const navigate = useNavigate();

  const onLinearContainerClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onChImageClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onS3ImageClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onBImageClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className="root6">
      <FrameComponent
        a="/4a@2x.png"
        ch="/7ch@2x.png"
        k="/6k1@2x.png"
        s3="/s3@2x.png"
        m="/2m@2x.png"
        b="/1b1@2x.png"
        onLinearContainerClick={onLinearContainerClick}
        onChImageClick={onChImageClick}
        onS3ImageClick={onS3ImageClick}
        onBImageClick={onBImageClick}
      />
      <div className="ellipse-div" />
      <FrameComponent1 />
      <img className="pizza-rotator-icon6" alt="" src="/pizza-rotator@2x.png" />
    </div>
  );
};

export default Root6;
