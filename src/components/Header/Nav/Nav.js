import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState("main");
  const onHandleNavigation = ({ currentTarget: { name } }) => setActive(name);

  return (
    <nav className="Nav">
      <ul className="NavMenu">
        <li className="NavItems">
          <Link
            to="/"
            className={`NavLinks ${active === "main" ? "Active" : ""}`}
            name="main"
            onClick={onHandleNavigation}
          >
            Головна
          </Link>
        </li>
        <li className="NavItems">
          <Link
            to="/about"
            name="about"
            className={`NavLinks ${active === "about" ? "Active" : ""}`}
            onClick={onHandleNavigation}
          >
            Хто Ми?
          </Link>
        </li>
        <li className="NavItems">
          <Link
            to="/contacts"
            name="contacts"
            className={`NavLinks ${active === "contacts" ? "Active" : ""}`}
            onClick={onHandleNavigation}
          >
            Контакти
          </Link>
        </li>
        <li className="NavItems">
          <Link
            to="/tracts"
            name="tracts"
            className={`NavLinks ${active === "tracts" ? "Active" : ""}`}
            onClick={onHandleNavigation}
          >
            Листівки
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
