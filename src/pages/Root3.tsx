import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import "./Root3.css";

const Root3 = () => {
  const navigate = useNavigate();

  const onChImageClick = useCallback(() => {
    navigate("/8");
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
    <div className="root3">
      <FrameComponent
        a="/4a@2x.png"
        ch="/7ch@2x.png"
        k="/6k@2x.png"
        s3="/s3@2x.png"
        m="/2m@2x.png"
        b="/1b1@2x.png"
        onChImageClick={onChImageClick}
        onKImageClick={onKImageClick}
        onS3ImageClick={onS3ImageClick}
        onBImageClick={onBImageClick}
      />
      <div className="root-item" />
      <FrameComponent1 />
      <img className="pizza-rotator-icon3" alt="" src="/pizza-rotator@2x.png" />
    </div>
  );
};

export default Root3;
