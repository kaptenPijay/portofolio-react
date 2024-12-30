export default function Contact() {
  return (
    <section id="contact" className="pt-36 pb-32 bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4
              className="font-semibold text-lg text-primary mb-2"
              data-aos="fade-up"
            >
              CONTACT
            </h4>
            <h2
              className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white"
              data-aos="fade-down"
            >
              Contact Me
            </h2>
            <p
              className="font-medium text-md text-secondary md:text-lg"
              data-aos="fade-left"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
              blanditiis? Veniam, maxime.
            </p>
          </div>
        </div>
        <form action="">
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8" data-aos="zoom-in">
              <label
                htmlFor="name"
                className="text-base text-primary font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                readOnly
                value={"Muhammad Zahran Yudha"}
                className="w-full bg-slate-200 p-3 rounded-md outline-none ring-primary ring-1 border-primary text-center text-primary text-base font-semibold transition duration-500 shadow-primary"
              />
            </div>
            <div className="w-full px-4 mb-8" data-aos="zoom-in">
              <label
                htmlFor="email"
                className="text-base text-primary font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                readOnly
                value={"muhammadzahran0205@gmail.com"}
                className="w-full bg-slate-200 p-3 rounded-md outline-none ring-primary ring-1 border-primary text-center text-primary text-base font-semibold transition duration-500 shadow-primary"
              />
            </div>
            <div className="w-full px-4 mb-8" data-aos="zoom-in">
              <label
                htmlFor="phone"
                className="text-base text-primary font-bold"
              >
                Phone / Whatsapp
              </label>
              <input
                type="text"
                id="phone"
                readOnly
                value={"+62-8218-0864-290"}
                className="w-full bg-slate-200 p-3 rounded-md outline-none ring-primary ring-1 border-primary text-center text-primary text-base font-semibold transition duration-500 shadow-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
