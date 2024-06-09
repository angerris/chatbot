import Spline from "@splinetool/react-spline";
import React from "react";

const Scene = () => {
  return (
    <Spline
      scene="https://prod.spline.design/gIPWsSWswMOGrNZi/scene.splinecode"
      className="splineScene"
    />
  );
};

export default React.memo(Scene);
