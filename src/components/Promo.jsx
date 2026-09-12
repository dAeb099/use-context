import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Promo = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "bg-white text-black" : "background-dark text-white"}
    px-30 py-5
    `}
    >
      <div
        className={`${theme === "light" ? "bg-cyan-400 text-black" : "section-bg-dark text-white"}
        px-50 py-5 rounded-2xl flex flex-row-reverse items-center justify-between gap-10
        `}
      >
        <div className="flex flex-col gap-4">
          <h1 className={`text-white text-2xl font-bold`}>Never Miss a Promo</h1>
          <p className="text-white">We always give our customers a promo for being loyal to us. Just subscribe to us :)</p>
          <input
            type="search"
            placeholder="yourname@mail.com"
            className={`bg-white p-2.5 rounded-2xl w-100 placeholder-gray-400`}
          />
          <button className={`${theme === "dark" ? "text-white bg-black" : "text-black bg-white"}
          w-30 p-2.5 rounded-2xl
          `}>Subscribe</button>
          
        </div>
        <div className="">
          <img
            src="https://koolkishan.github.io/react-ecommerce/static/media/promo.3f211a9c7969f112a2cb.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;
