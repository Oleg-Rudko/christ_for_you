import React from "react";
import SectionContactsTitle from "./SectionContactsTitle/SectionContactsTitle";
import SectionContactsSocial from "./SectionContactsSocial/SectionContactsSocial";
const SectionContacts = () => {
  return (
    <section className="SectionContacts">
      <div className="SectionContactsContainer">
        <SectionContactsTitle />
        <SectionContactsSocial />
      </div>
    </section>
  );
};

export default SectionContacts;
