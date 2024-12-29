export default function Hero() {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hello Everyone 👋, My Name Is
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                M. Zahran Yudha
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Web Developer & Founder Of{" "}
              <span className="text-dark">
                Cipta Karya Teknologi Nusantara Group
              </span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, esse.
            </p>

            <a
              href="https://wa.me/+622180864290"
              target="_blank"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src="/img/hero.png"
                alt="M. Zahran Yudha"
                className="max-w-full mx-auto"
                width="761"
                height="761"
              />
              <span className="absolute -z-10 bottom-48 left-1/2 scale-110 -translate-x-1/2 sm:bottom-96 sm:scale-90 md:scale-125 lg:bottom-80 lg:scale-90 xl:scale-125">
                <img
                  src="/img/blob.png"
                  alt="blob"
                  style={{ transform: "scale(1.8)" }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
