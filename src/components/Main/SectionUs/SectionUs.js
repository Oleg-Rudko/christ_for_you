import React from "react";
import SectionUsTitle from "./SectionUsTitle/SectionUsTitle";
import SectionCardsOne from "./SectionCards/SectionCardsOne/SectionCardsOne";
// import SectionCardsTwo from "./SectionCards/SectionCardsTwo/SectionCardsTwo";
// import SectionCardsThree from "./SectionCards/SectionCardsThree/SectionCardsThree";

const SectionUs = () => {
  return (
    <section className="SectionUs">
      <div className="SectionContainerUs">
        <SectionUsTitle />
        <div className="SectionCardsColumn">
          <SectionCardsOne />
          {/* <SectionCardsTwo /> */}
          {/* <SectionCardsThree /> */}
        </div>
      </div>
    </section>
  );
};

export default SectionUs;
