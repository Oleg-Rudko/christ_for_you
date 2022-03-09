import BannerTitle from "./BannerTitle/BannerTitle";
import BannerDescription from "./BannerDescription/BannerDescription";
import CallBack from "../../Main/SectionMain/CallBack/CallBack";
const SectionBanner = () => {
  return (
    <section className="SectionBanner">
      <div className="SectionBannerContainer">
        <BannerTitle />
        <BannerDescription />
        <CallBack />
      </div>
    </section>
  );
};

export default SectionBanner;
