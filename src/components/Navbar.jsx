import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { RiMoonFill, RiSunFill } from "@remixicon/react";

const Navbar = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "bg-white text-black" : "background-dark text-white"}
      flex items-center justify-between w-full h-20 px-30
      `}
    >
      <div className="">
        <h1
          className={`${theme === "dark" ? "header-light" : "header-dark"}
        font-bold text-3xl`}
        >
          ehya.
        </h1>
      </div>
      <div className="">
        <ul className="flex items-center justify-between gap-10">
          <li>
            <a className="font-bold">HOME</a>
          </li>
          <li>
            <a className="font-bold">LANDING</a>
          </li>
          <li>
            <a className="font-bold">PAGES</a>
          </li>
          <li>
            <a className="font-bold">DOCS</a>
          </li>
          <li>
            <a className="font-bold">HELP</a>
          </li>
          <li>
            <button onClick={ToggleTheme}
            className={`${theme === "light" ? "text-blue-600" : "text-yellow-300"}`}>
              {theme === "light" ? <RiMoonFill /> : <RiSunFill />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
