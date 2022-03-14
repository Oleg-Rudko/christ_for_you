import React, { useState } from "react";
import CallBackIcon from "../../../Footer/FooterCall/FooterIcons/FooterIconCall.svg";
import CallbackForm from "../../../CallbackForm/CallbackForm";
const CallBack = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="CallBackBlockFlex">
      <div className="CallBackBlock" onClick={() => setIsOpen(!isOpen)}>
        <img
          width="22px"
          height="22px"
          className="CallBackSvg"
          src={CallBackIcon}
          alt=""
        ></img>
        Дізнатись телефон
        <CallbackForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default CallBack;
