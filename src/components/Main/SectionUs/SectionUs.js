import React from "react";
import SectionUsTitle from "./SectionUsTitle/SectionUsTitle";
import SectionCards from "./SectionCards/SectionCards/SectionCards";

const SectionUs = () => {
  return (
    <section className="SectionUs">
      <div className="SectionContainerUs">
        <SectionUsTitle />
        <SectionCards />
      </div>
    </section>
  );
};

export default SectionUs;
