/* eslint-disable react/prop-types */
export default function Navbar(props) {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              Muhammad Zahran Yudha
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
              className="absolute py-5 bg-white shadow-lg rounded-lg max-w-full w-full right-0 top-full opacity-0 invisible transition-all ease-in-out duration-500 lg:block lg:visible lg:opacity-100 lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Homepage
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#education"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Education
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#certificate"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Certificate
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
                <li className="flex items-center pl-8">
                  <div className="flex justify-center">
                    <span className="text-sm text-slate-500">Light</span>
                    <input
                      type="checkbox"
                      id="dark-toggle"
                      className="hidden"
                    />
                    <label
                      htmlFor="dark-toggle"
                      className="mx-1"
                      id="toggleCheck"
                    >
                      <div className="w-9 h-5 bg-slate-500 cursor-pointer rounded-full flex items-center p-1">
                        <div className="toggle-circle w-4 h-4 bg-white rounded-full dark:translate-x-3 transition duration-300 ease-out"></div>
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500">Dark</span>
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
