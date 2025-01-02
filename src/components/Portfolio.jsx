import Card from "./Card.jsx";
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4
              className="font-semibold text-lg text-primary mb-2"
              data-aos="fade-up"
            >
              PORTFOLIO
            </h4>
            <h2
              className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white"
              data-aos="fade-down"
            >
              PROJECT
            </h2>
            <p
              className="font-medium text-md text-secondary md:text-lg"
              data-aos="fade-up"
            >
              Here are the applications I have developed. Explore the projects
              I’ve worked on, ranging from user-friendly web apps to complex
              digital solutions, all designed with innovation and efficiency in
              mind.
            </p>
          </div>
        </div>
        <Card />
      </div>
    </section>
  );
}
