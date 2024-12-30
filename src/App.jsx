import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Education from "./components/Education.jsx";
import Achievement from "./components/Achievement.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
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
      <Portfolio />
      <Education />
      <Achievement />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
