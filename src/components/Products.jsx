import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Products = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "bg-white text-black" : "background-dark text-white"}
    px-30 py-5
    `}
    >
      <div
        className={`${theme === "light" ? "bg-cyan-100 text-black" : "section-bg-dark text-white"}
        px-50 py-5 rounded-2xl flex items-center justify-between gap-10
        `}
      >
        <div className="flex flex-col gap-4">
          <h1
            className={`${theme === "dark" ? "header-light" : "header-dark"}
          text-5xl font-bold
          `}
          >
            BROWSE MILLION PRODUCTS FOR YOUR NEEDS
          </h1>
          <input
            type="search"
            placeholder="I want to buy..."
            className={`${theme === "dark" ? "background-dark" : "bg-white"} p-2.5 rounded-2xl w-100`}
          />
        </div>
        <div className="">
          <img
            src="https://koolkishan.github.io/react-ecommerce/static/media/home.629de4aa7e8ce767acf4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
