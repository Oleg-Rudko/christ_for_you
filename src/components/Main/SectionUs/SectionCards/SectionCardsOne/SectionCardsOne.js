import React from "react";
import { sectioncardsinfoitemsone } from "../sectioncardsinfo/sectioncardsinfo";
// import { sectioncardsinfoitemsonedescription } from "../sectioncardsinfo/sectioncardsinfo";
const SectionCardsOne = () => {
  return (
    <div className="SectionCardsFlex">
      <div className="SectionCardsRowOne">
        <ul className="SectionCardsMenu">
          {sectioncardsinfoitemsone.map(({ title }, idx) => (
            <li className="SectionCardsItems" key={idx}>
              <a className="SectionCardsLinks" href="/">
                {title.link.item}
              </a>
            </li>
          ))}
          {sectioncardsinfoitemsone.map(({ title }, idx) => (
            <li className="SectionCardsItems" key={idx}>
              <a className="SectionCardsLinks" href="/">
                {title.link.item}
              </a>
            </li>
          ))}
        </ul>
        {/* {sectioncardsinfoitemsonedescription.map(({ description }) => (
          <p className="SectionCardsP">{description}</p>
        ))} */}
      </div>
    </div>
  );
};

export default SectionCardsOne;

// <img className="SectionCardsImages" src={src} alt={alt}></img>
