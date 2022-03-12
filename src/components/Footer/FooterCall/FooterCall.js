import React, { useState } from "react";
import CallbackForm from "../../CallbackForm";
import CallSvg from "./FooterIcons/FooterIconCall.svg";

const FooterCall = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="FooterCallBlock">
      <div className="FooterCallNumber" onClick={() => setIsOpen(!isOpen)}>
        <img
          width="22px"
          height="22px"
          className="CallIconSvg"
          src={CallSvg}
          alt="CallIconSvg"
        />
        Дізнатись телефон
      </div>
      <CallbackForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default FooterCall;
