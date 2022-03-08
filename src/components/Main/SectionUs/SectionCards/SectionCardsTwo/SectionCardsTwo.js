import React from "react";
import { sectioncardsinfoitemstwo } from "../sectioncardsinfo/sectioncardsinfo";

const SectionCardsTwo = () => {
  return (
    <div className="SectionCardsFlex">
      <div className="SectionCardsRowOne">
        <ul className="SectionCardsMenu">
          {sectioncardsinfoitemstwo.map(({ title }, idx) => (
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

export default SectionCardsTwo;
