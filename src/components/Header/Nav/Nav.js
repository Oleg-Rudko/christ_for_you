import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="NavMenu">
        <li className="NavItems">
          <NavLink to="/" className="NavLinks Active">
            Головна
          </NavLink>
        </li>
        <li className="NavItems">
          <NavLink to="/" className="NavLinks">
            Хто Ми?
          </NavLink>
        </li>
        <li className="NavItems">
          <NavLink to="/" className="NavLinks">
            Контакти
          </NavLink>
        </li>
        <li className="NavItems">
          <NavLink to="/" className="NavLinks">
            Листівки
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
