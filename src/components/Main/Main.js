import React from "react";
import SectionMain from "./SectionMain/SectionMain";
import SectionUs from "./SectionUs/SectionUs";

const Main = () => {
  return (
    <section className="Section">
      <div className="SectionContainer">
        <SectionMain />
        <SectionUs />
      </div>
    </section>
  );
};

export default Main;
