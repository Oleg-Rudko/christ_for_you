import React from "react";
import CallSvg from "./FooterIcons/FooterIconCall.svg";
const FooterCall = () => {
  return (
    <div className="FooterCallBlock">
      <a href="/" className="FooterCallNumber">
        <img
          width="22px"
          height="22px"
          className="CallIconSvg"
          src={CallSvg}
          alt="CallIconSvg"
        ></img>
        Дізнатись телефон
      </a>
    </div>
  );
};

export default FooterCall;
