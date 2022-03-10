import React from "react";
import BannerImage from "./BannerImage/BannerImage.webp";
const BannerImages = () => {
  return (
    <div className="BannerImageBlock">
      <img alt="BannerImage" src={BannerImage} className="BannerImage"></img>
    </div>
  );
};

export default BannerImages;
