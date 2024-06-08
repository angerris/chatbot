import SplineNext from "@splinetool/react-spline/next";
import React from "react";

const Scene = () => {
  return (
    <SplineNext
      scene="https://prod.spline.design/NB06AAVNuWV9KO0r/scene.splinecode"
      className="splineScene"
    />
  );
};

export default React.memo(Scene);
