import React from "react";
import { Link } from "react-router-dom";
const FooterCall = () => {
  return (
    <div className="FooterCallBlock">
      <Link className="FooterCallNumber" to="/">
        Дізнатись номер
      </Link>
    </div>
  );
};

export default FooterCall;
