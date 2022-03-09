import React from "react";

import SectionWho from "./SectionWho/SectionWho";
import SectionBanner from "./SectionBanner/SectionBanner";

const About = () => {
  return (
    <div className="SectionAbout">
      <SectionBanner />
      <SectionWho />
    </div>
  );
};

export default About;
