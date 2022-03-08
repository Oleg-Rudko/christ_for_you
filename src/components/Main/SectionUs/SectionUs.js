import React from "react";
import SectionUsTitle from "./SectionUsTitle/SectionUsTitle";
import SectionCardsOne from "./SectionCards/SectionCardsOne/SectionCardsOne";

const SectionUs = () => {
  return (
    <section className="SectionUs">
      <div className="SectionContainerUs">
        <SectionUsTitle />
        <div className="SectionCardsColumn">
          <SectionCardsOne />
          <SectionCardsTwo />
          <SectionCardsThree />
        </div>
      </div>
    </section>
  );
};

export default SectionUs;
