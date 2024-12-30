import { useEffect, useState } from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
export default function CertificateCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data/certificate.json")
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson))
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="flex flex-wrap">
      {data.map((items) => (
        <div className="w-full px-4 md:w-1/2 lg:1/3 mx-auto" key={items.id}>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
            <img src={items.image} alt={items.name} className="w-full" />
            <div className="py-8 px-6">
              <h3 className="mb-3 font-semibold text-xl text-dark hover:text-primary transition duration-500 truncate">
                {items.name}
              </h3>
              <a
                href={items.url}
                className="font-medium text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80 inline-flex items-center"
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