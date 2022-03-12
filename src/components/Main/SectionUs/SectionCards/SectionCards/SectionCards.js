import React from "react";
import { sectionCardsInfo } from "../sectionCardsInfo/sectionCardsInfo";

const SectionCards = () => {
  return (
    <div className="SectionCardsRow">
      {sectionCardsInfo.map(({ title, description, image, alt }, idx) => (
        <div className="SectionCardsFlex" key={idx}>
          <ul className="CardsMenu">
            {title.map(({ name, path }, i) => (
              <li className="CardsMenuItems" key={i}>
                <a className="CardsMenuLinks !CardsMenuLinksActive" href={path}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <p className="SectionCardsDescription">{description}</p>
          <img className="SectionCardsImages" src={image} alt={alt}></img>
        </div>
      ))}
    </div>
  );
};

export default SectionCards;
