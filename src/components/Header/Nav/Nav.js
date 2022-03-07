import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState("main");

  return (
    <nav className="Nav">
      <ul className="NavMenu">
        <li className="NavItems">
          <Link
            to="/"
            className={`NavLinks ${active === "main" ? "Active" : ""}`}
            name="main"
            onClick={(e) => setActive(e.currentTarget.name)}
          >
            Головна
          </Link>
        </li>
        <li className="NavItems">
          <Link
            to="/about"
            name="about"
            onClick={(e) => setActive(e.currentTarget.name)}
            className={`NavLinks ${active === "about" ? "Active" : ""}`}
          >
            Хто Ми?
          </Link>
        </li>
        <li className="NavItems">
          <Link
            to="/"
            name="contacts"
            onClick={(e) => setActive(e.currentTarget.name)}
            className={`NavLinks ${active === "contacts" ? "Active" : ""}`}
          >
            Контакти
          </Link>
        </li>
        <li className="NavItems">
          <Link
            to="/"
            name="tracts"
            onClick={(e) => setActive(e.currentTarget.name)}
            className={`NavLinks ${active === "tracts" ? "Active" : ""}`}
          >
            Листівки
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
