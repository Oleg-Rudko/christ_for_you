import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HamburgerMenu
      isOpen={isOpen}
      menuClicked={() => setIsOpen(!isOpen)}
      width={18}
      height={15}
      strokeWidth={1}
      rotate={0}
      color="black"
      borderRadius={0}
      animationDuration={0.5}
    />
  );
};

export default Hamburger;
