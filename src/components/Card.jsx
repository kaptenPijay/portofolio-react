import { useEffect, useState } from "react";
export default function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data/portfolio.json")
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson.reverse()))
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto max-h-[calc(100vh-100px)] overflow-y-auto lg:overflow-y-visible lg:max-h-[100%]">
      {data.map((items) => (
        <a
          href={items.url}
          target="_blank"
          className="block mb-12 p-4 md:w-1/2 group"
          key={items.id}
        >
          <div className="rounded-lg shadow-md overflow-hidden dark:shadow-primary dark:bg-slate-800">
            <div
              className="overflow-hidden relative"
              style={{ backgroundColor: items.custom }}
            >
              <h3 className="w-full text-[10px] text-white font-semibold absolute top-2 group-hover:top-3 transition-all duration-500 text-center sm:top-6 sm:text-base md:top-3 md:text-[11px] lg:text-base lg:top-5">
                {items.name}
              </h3>
              <img
                src={items.image}
                alt={items.name}
                className="w-full max-w-[600px] max-h-[300px] transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 px-3 block group-hover:text-primary transition duration-500 dark:text-white">
              {items.name}
            </h3>
            <div className="px-3 py-2 flex flex-wrap gap-3">
              {items.role.map((d, i) => (
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full font-medium text-base dark:text-white"
                  key={i}
                >
                  {d}
                </button>
              ))}
            </div>
            <p className="font-medium text-base text-secondary px-3 pb-3">
              {items.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
