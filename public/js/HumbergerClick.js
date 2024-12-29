export default function HumbergerClick() {
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  hamburger.classList.toggle("hamburger-active");
  if (navMenu.classList.contains("invisible")) {
    navMenu.classList.remove("opacity-0", "invisible");
    navMenu.classList.add("opacity-100", "visible");
  } else {
    navMenu.classList.add("opacity-0", "invisible");
    navMenu.classList.remove("opacity-100", "visible");
  }
}
