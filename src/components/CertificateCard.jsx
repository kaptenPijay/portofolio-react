import { useEffect, useState } from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
export default function CertificateCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data/certificate.json")
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson.reverse()))
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="flex flex-wrap max-h-[calc(100vh-100px)] overflow-y-auto lg:overflow-y-visible lg:max-h-[100%]">
      {data.map((items) => (
        <div className="w-full px-4 md:w-1/2 lg:1/3 mx-auto" key={items.id}>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800 dark:shadow-primary">
            <img src={items.image} alt={items.name} className="w-full" />
            <div className="py-8 px-6">
              <h3 className="mb-3 font-semibold text-xl text-dark hover:text-primary transition duration-500 dark:text-white">
                {items.name}
              </h3>
              <a
                href={items.url}
                target="_blank"
                className="font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-4 rounded-lg hover:opacity-80 inline-flex items-center"
              >
                Preview <RiArrowRightUpLine />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
