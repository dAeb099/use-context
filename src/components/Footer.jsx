import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { RiMoonFill, RiSunFill } from "@remixicon/react";

const Footer = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "bg-white text-black" : "background-dark text-white"}
      flex items-center justify-between w-full h-25 px-30
      `}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h1
          className={`${theme === "dark" ? "header-light" : "header-dark"}
        font-bold text-3xl`}
        >
          ehya.
        </h1>
        <p
          className={`${theme === "dark" ? "header-light" : "header-dark"}`}
        >
          Build a modern and creative website with crealand
        </p>
      </div>
      <div className="">© Copyright 2026. All rights reversed</div>
    </div>
  );
};

export default Footer;
