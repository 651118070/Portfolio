import React, { useEffect, useRef } from "react";
import Globe from "globe.gl";

const GlobeGL = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = Globe()
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      (globeRef.current);

    globe.pointOfView({ lat: 0, lng: 0, altitude: 1.5 });

    // Enable rotation
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
  }, []);

  return (
    <div
      ref={globeRef}
      className=" w-full bg-gray-100 dark:bg-gray-900"
    />
  );
};

export default GlobeGL;
