import { Link } from "react-router-dom";
import React, { useState } from "react";
const NavBurgerMenu = () => {
  const [active, setActive] = useState("main");
  return (
    <div>
      <div className="BurgerTitle">Меню</div>
      <nav className="NavBurger">
        <ul className="NavBurgerMenu">
          <li className="BurgerMenuItems">
            <Link
              to="/"
              onClick={(e) => setActive(e.currentTarget.name)}
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
              onClick={(e) => setActive(e.currentTarget.name)}
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
              onClick={(e) => setActive(e.currentTarget.name)}
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
              onClick={(e) => setActive(e.currentTarget.name)}
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
