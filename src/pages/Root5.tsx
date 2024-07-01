import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Side from "../components/Side";
import PageContent from "../components/PageContent";
import "./Root5.css";

const Root5 = () => {
  const navigate = useNavigate();

  const onLinearContainerClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onMImageClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onSideContainerClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className="root5">
      <div className="side" onClick={onSideContainerClick}>
        <div className="side-child" />
        <Side
          pngTransparentSmoothieMil="/pngtransparentsmoothiemilkshakejuiceicecreamdrinkjuicecreamfoodstrawberriesremovebgpreview-21@2x.png"
          m="/2m@2x.png"
          onLinearContainerClick={onLinearContainerClick}
          onMImageClick={onMImageClick}
        />
      </div>
      <PageContent />
      <img className="pizza-rotator-icon5" alt="" src="/pizza-rotator@2x.png" />
    </div>
  );
};

export default Root5;
