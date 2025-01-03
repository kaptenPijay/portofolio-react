/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { RiSunFill, RiMoonFill } from "@remixicon/react";
export default function Navbar(props) {
  const checkLocalStorage =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false;

  const [isDarkMode, setIsDarkMode] = useState(checkLocalStorage);

  useEffect(() => {
    const html = document.querySelector("html");
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  const handleToggle = (e) => {
    setIsDarkMode(e.target.checked);
  };
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative py-3 lg:py-0">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-dark tracking-wider text-3xl dark:text-white hover:text-primary dark:hover:text-primary transition-all ease-in-out duration-300"
            >
              MZ<span className="text-primary">.</span>
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-4 lg:invisible"
              onClick={props.HumbergerClick}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className="absolute py-5 bg-white shadow-lg rounded-lg max-w-full w-full right-0 top-full opacity-0 invisible transition-all ease-in-out duration-500 lg:block lg:visible lg:opacity-100 lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-primary lg:dark:bg-transparent lg:dark:shadow-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-300"
                  >
                    Homepage
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-300"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#education"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-300"
                  >
                    Education
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#certificate"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-300"
                  >
                    Certificate
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li className="flex items-center pl-8 mt-3 lg:mt-0">
                  <div className="flex justify-center">
                    <span className="text-sm text-slate-500 mr-2 mt-[0.32rem] dark:text-white">
                      Light
                    </span>
                    <input
                      type="checkbox"
                      id="dark-toggle"
                      className="hidden"
                      checked={isDarkMode}
                      onChange={handleToggle}
                    />
                    <label
                      htmlFor="dark-toggle"
                      className="mx-1"
                      id="toggleCheck"
                    >
                      <div className="w-14 h-7 border-2 border-solid bg-white cursor-pointer rounded-full flex items-center p-1 pb-3 pt-3 dark:bg-slate-500 dark:border-primary">
                        <div className="toggle-circle transition duration-500 ease-out">
                          {isDarkMode ? (
                            <RiMoonFill className="text-white text-xs translate-x-3" />
                          ) : (
                            <RiSunFill className="text-orange-400 text-xs" />
                          )}
                        </div>
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500 mt-[0.32rem] dark:text-white">
                      Dark
                    </span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
