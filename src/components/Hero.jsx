import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { RiFileDownloadLine, RiWhatsappLine } from "@remixicon/react";

export default function Hero() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Muhammad Zahran Yudha"],
      typeSpeed: 50,
      startDelay: 100,
      loop: true,
      showCursor: false,
      backDelay: 1000,
      backSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section id="home" className="pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1
              className="text-base font-semibold text-primary md:text-xl"
              data-aos="fade-right"
            >
              Hello Everyone 👋, My Name Is
              <span
                className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white min-h-[2.3em] sm:min-h-[1.5rem]"
                id="nameTyping"
                ref={el}
              ></span>
            </h1>
            <h2
              className="font-medium text-secondary text-lg mb-5 lg:text-2x"
              data-aos="fade-left"
            >
              Web Developer & Founder Of{" "}
              <span className="text-dark dark:text-white">
                Cipta Karya Teknologi Nusantara Group
              </span>
            </h2>
            <p
              className="font-medium text-secondary mb-10 leading-relaxed"
              data-aos="fade-down"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, esse.
            </p>

            <a
              href="https://wa.me/+622180864290"
              target="_blank"
              className="text-base font-semibold text-white bg-primary border-2 border-solid border-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mr-3 inline-flex mb-5 sm:mt-0"
              data-aos="zoom-in"
            >
              Whatsapp <RiWhatsappLine className="ml-2" />
            </a>
            <a
              href="/pdf/cv.pdf"
              target="_blank"
              className="text-base font-semibold text-primary border-2 border-solid border-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out inline-flex items-center"
              data-aos="zoom-in"
            >
              Download CV <RiFileDownloadLine className="ml-2" />
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src="/img/hero.png"
                alt="M. Zahran Yudha"
                className="max-w-full mx-auto relative z-10"
                width="761"
                height="761"
                data-aos="zoom-out"
              />
              <span className="absolute bottom-48 left-1/2 scale-110 -translate-x-1/2 sm:bottom-96 sm:scale-90 md:scale-125 lg:bottom-80 lg:scale-90 xl:scale-125">
                <img
                  src="/img/blob.png"
                  alt="blob"
                  style={{ transform: "scale(1.8)" }}
                  data-aos="zoom-in"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
