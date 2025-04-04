import React, { useState } from "react";
import NavBar from "./Navbar";

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header
      className="fixed top-0 left-0 w-full h-20 flex
       items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0"
    >
      <div
        className="max-w-screen-2xl w-full mx-auto px-4
      flex justify-between items-center"
      >
        <h1>
          <a
            href="/"
            className="text-lg py-1 font-bold text-zinc-400 transition-colors hover:text-zinc-200"
          >
            CW
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <NavBar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
