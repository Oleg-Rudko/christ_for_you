import React from "react";
import SectionMain from "./SectionMain/SectionMain";
import SectionUs from "./SectionUs/SectionUs";

const Main = () => {
  return (
    <section className="SectionHome">
      <SectionMain />
      <SectionUs />
    </section>
  );
};

export default Main;
