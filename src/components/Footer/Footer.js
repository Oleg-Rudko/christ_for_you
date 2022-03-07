import React from "react";
import FooterCall from "./FooterCall/FooterCall";
import FooterSocial from "./FooterSocial/FooterSocial";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

const Footer = () => {
  return (
    <footer className="Footer">
      <FooterCall />
      <FooterSocial />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
