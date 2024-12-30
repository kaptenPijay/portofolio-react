export default function Education() {
  return (
    <section
      id="education"
      className="pt-36 pb-32 bg-slate-800 dark:bg-slate-300"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4
              className="font-semibold text-lg text-primary mb-2"
              data-aos="fade-up"
            >
              EDUCATION
            </h4>
            <h2
              className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-dark"
              data-aos="fade-down"
            >
              Below are the places where I gained knowledge
            </h2>
            <p
              className="font-medium text-md text-secondary md:text-lg"
              data-aos="fade-up"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
              blanditiis? Veniam, maxime.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="flex flex-wrap items-center justify-center">
          <a
            href="#"
            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
          >
            <img src="img/education/unama.png" alt="unama-logo" />
          </a>
          <a
            href="#"
            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
          >
            <img src="img/education/s2.png" alt="s2-logo" />
          </a>
          <a
            href="#"
            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
          >
            <img
              src="img/education/kampus-merdeka.png"
              alt="kampus-merdeka-logo"
            />
          </a>
          <a
            href="#"
            className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
          >
            <img src="img/education/dicoding.png" alt="dicoding-logo" />
          </a>
        </div>
      </div>
    </section>
  );
}
