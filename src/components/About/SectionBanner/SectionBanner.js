import React from "react";
import BannerTitle from "./BannerTitle/BannerTitle";
import BannerDescription from "./BannerDescription/BannerDescription";
import CallBack from "../../Main/SectionMain/CallBack/CallBack";
import BannerImages from "./BannerImages/BannerImages";
const SectionBanner = () => {
  return (
    <section className="SectionBanner">
      <div className="SectionBannerContainer">
        <div className="SectionBannerFlex">
          <BannerTitle />
          <BannerDescription />
          <CallBack />
        </div>
        <div className="BannerImagesBlock">
          <BannerImages />
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
