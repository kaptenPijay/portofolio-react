import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import "./App.css";
import HumbergerClick from "../public/js/HumbergerClick.js";
function App() {
  // Navbar Fixed
  window.onscroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    window.pageYOffset > fixedNav
      ? header.classList.add("navbar-fixed")
      : header.classList.remove("navbar-fixed");
  };
  return (
    <>
      <Navbar HumbergerClick={HumbergerClick} />
      <Hero />
      <About />
    </>
  );
}

export default App;
