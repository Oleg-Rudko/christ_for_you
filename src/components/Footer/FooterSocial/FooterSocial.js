import React from "react";
import { footersocialsicons } from "./footersocialicons";
const FooterSocial = () => {
  return (
    <div className="FooterSocialFlex">
      <ul className="FooterSocialMenu">
        {footersocialsicons.map(({ src, alt, path }, idx) => (
          <li className="FooterSocialItems" key={idx}>
            <a className="FooterSocialLinks" href={path}>
              <img src={src} alt={alt}></img>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSocial;
