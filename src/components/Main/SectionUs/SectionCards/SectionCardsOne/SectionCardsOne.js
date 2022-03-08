import React from "react";
import {
  sectioncardsinfoitemsone,
  sectioncardsinfoitemstwo,
  sectioncardsinfoitemsthree,
} from "../sectioncardsinfo/sectioncardsinfo";
import { sectioncardsinfo } from "../sectioncardsinfo/sectioncardsinfo";
const SectionCardsOne = () => {
  return (
    <div className="SectionCardsFlex">
      <div className="SectionCardsRowOne">
        <ul className="SectionCardsMenu">
          {sectioncardsinfoitemsone.map(({ title }, idx) => (
            <li className="SectionCardsItems" key={idx}>
              <a className="SectionCardsLinks" href="/">
                {title}
              </a>
            </li>
          ))}
        </ul>
        {sectioncardsinfo.map(({ description }, idx) => (
          <p className="SectionCardsP">{description}</p>
        ))}
        {sectioncardsinfo.map(({ src, alt }) => (
          <img className="SectionCardsImages" src={src} alt={alt}></img>
        ))}
      </div>
    </div>
  );
};

const SectionCardsThree = () => {
  return (
    <div className="SectionCardsFlex">
      <div className="SectionCardsRowOne">
        <ul className="SectionCardsMenu">
          {sectioncardsinfoitemsone.map(({ title }, idx) => (
            <li className="SectionCardsItems" key={idx}>
              <a className="SectionCardsLinks" href="/">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionCardsOne;
