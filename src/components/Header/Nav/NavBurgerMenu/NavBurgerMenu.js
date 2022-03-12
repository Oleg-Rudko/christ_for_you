import { Link } from "react-router-dom";
import React, { useState } from "react";
const NavBurgerMenu = ({ setIsOpen }) => {
  const [active, setActive] = useState("main");

  const onHandleNavigation = ({ currentTarget: { name } }) => {
    setActive(name);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="BurgerTitle">Меню</div>
      <nav className="NavBurger">
        <ul className="NavBurgerMenu">
          <li className="BurgerMenuItems">
            <Link
              to="/"
              onClick={onHandleNavigation}
              name="mainpage"
              className={`BurgerMenuLinks ${
                active === "mainpage" ? "ActiveBurger" : ""
              }`}
            >
              Головна
            </Link>
          </li>
          <li className="BurgerMenuItems">
            <Link
              to="/about"
              name="about-who"
              onClick={onHandleNavigation}
              className={`BurgerMenuLinks ${
                active === "about-who" ? "ActiveBurger" : ""
              }`}
            >
              Хто Ми?
            </Link>
          </li>
          <li className="BurgerMenuItems">
            <Link
              to="/contacts"
              name="contacts-us"
              onClick={onHandleNavigation}
              className={`BurgerMenuLinks ${
                active === "contacts-us" ? "ActiveBurger" : ""
              }`}
            >
              Контакти
            </Link>
          </li>
          <li className="BurgerMenuItems">
            <Link
              to="/tracts"
              name="tractsto"
              onClick={onHandleNavigation}
              className={`BurgerMenuLinks ${
                active === "tractsto" ? "ActiveBurger" : ""
              }`}
            >
              Листівки
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBurgerMenu;
