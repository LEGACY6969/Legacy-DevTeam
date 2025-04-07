import React, { useState, useEffect } from "react";
import {BiPhoneCall, BiSolidSun, BiSolidMoon, BiLogoGmail, BiLogoDiscord} from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[99] bg-navbar text-red-500 border-b-[1px]  border-primary/50">
        <nav className="container flex items-center justify-between h-[70px] py-2 md:px-8 ">
          {/* Logo section */}
          <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-primary">
            <a href="#" className="flex items-center gap-2">
              <img
                  src={theme === "dark" ? "/src/assets/logo.png" : "/src/assets/logo2.png"}
                  alt="Logo"
                  className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300"
              />

              LEGACY <span className="inline-block font-bold text-primary">DEV TEAM</span>
            </a>
          </div>

          {/* Desktop menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Home{" "}
                </a>
              </li>
              <li>Contact us</li>
              <li>
                <div className="flex items-center gap-4">
                  <div>
                    <BiLogoDiscord
                        className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90"/>
                  </div>
                  <div>
                    <p>Join us on</p>
                    <p>
                      <a href="https://discord.gg/dUPwqtDAkz"> LEGACY_DEV_TEAM</a>
                    </p>
                  </div>
                </div>
              </li>
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                  <BiSolidSun
                      className="text-2xl"
                      onClick={() => setTheme("light")}
                  />
              ) : (
                  <BiSolidMoon
                      className="text-2xl"
                      onClick={() => setTheme("dark")}
                  />
              )}
            </ul>
          </div>
          {/* Mobile menu Header */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
                <BiSolidSun
                    className="text-2xl"
                    onClick={() => setTheme("light")}
                />
            ) : (
                <BiSolidMoon
                    className="text-2xl"
                    onClick={() => setTheme("dark")}
                />
            )}
            {showMenu ? (
                <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                />
            ) : (
                <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                />
            )}
          </div>
        </nav>
      </header>
      {/* Mobile menu section */}
      <ResponsiveMenu showMenu={showMenu}/>
    </>
  );
};

export default Navbar;
