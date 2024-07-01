import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PageContent from "../components/PageContent";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const onAImageClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onChImageClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onKImageClick = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onS3ImageClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className="header">
      <FrameComponent
        a="/4a@2x.png"
        ch="/7ch@2x.png"
        k="/6k@2x.png"
        s3="/s3@2x.png"
        m="/2m@2x.png"
        b="/1b@2x.png"
        onAImageClick={onAImageClick}
        onChImageClick={onChImageClick}
        onKImageClick={onKImageClick}
        onS3ImageClick={onS3ImageClick}
      />
      <PageContent />
      <div className="parent">
        <img className="icon" loading="lazy" alt="" src="/3@2x.png" />
        <img className="icon1" loading="lazy" alt="" src="/2@2x.png" />
        <img
          className="pizza-rotator-icon"
          alt=""
          src="/pizza-rotator@2x.png"
        />
      </div>
    </div>
  );
};

export default Header;
