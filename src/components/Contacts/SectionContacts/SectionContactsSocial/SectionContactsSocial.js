import React from "react";
import { sectionContactsSocialMap } from "./sectionContactsSocialMap";
import SocialZoom from "./SectionContactsSocialIcons/zoom.svg";
const SectionContactsSocial = () => {
  return (
    <div className="SectionContactsSocial">
      <div className="SectionContactsFlex">
        <ul className="ContactsMenu">
          {sectionContactsSocialMap.map(({ links, icon, alt }) => (
            <li className="ContactsMenuItems">
              <div className="ContactsMenuCircle">
                <img className="ContactsMenuIcons" src={icon} alt={alt}></img>
              </div>
              {links.map(({ href, name }) => (
                <a href={href} className="ContactsMenuLinks">
                  {name}
                </a>
              ))}
            </li>
          ))}
        </ul>
        <div className="SectionContactsParagraph">
          <p className="SectionContactsP">
            Також ви можете доєднатись до молитви з нами у зумі
          </p>
        </div>
        <div className="SectionContactsZoom">
          <img className="SectionContactsImage" src={SocialZoom}></img>
          <a href="#" className="ZoomLink">
            Example
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionContactsSocial;
