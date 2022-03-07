import React from "react";
const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="NavMenu">
        <li className="NavItems">
          <a href="/" className="NavLinks Active">
            Головна
          </a>
        </li>
        <li className="NavItems">
          <a href="/" className="NavLinks">
            Хто Ми?
          </a>
        </li>
        <li className="NavItems">
          <a href="/" className="NavLinks">
            Контакти
          </a>
        </li>
        <li className="NavItems">
          <a href="/" className="NavLinks">
            Листівки
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
