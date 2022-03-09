import React from "react";
import { sectionCardsInfo } from "../sectioncardsinfo/sectionCardsInfo";

const SectionCards = () => {
  return (
    <div className="SectionCardsRow">
      {sectionCardsInfo.map(({ title, description, image, alt }) => {
        return (
          <div className="SectionCardsFlex">
            <ul className="CardsMenu">
              {title.map(({ name, path }) => {
                return (
                  <li className="CardsMenuItems">
                    <a
                      className="CardsMenuLinks !CardsMenuLinksActive"
                      href={path}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="SectionCardsDescription">{description}</p>
            <img className="SectionCardsImages" src={image} alt={alt}></img>
          </div>
        );
      })}
    </div>
  );
};

export default SectionCards;
