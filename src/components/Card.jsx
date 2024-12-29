import { useEffect, useState } from "react";
export default function Card(check) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((responseJson) => {
        const respData =
          check === "certificate"
            ? responseJson.filter((d) => d.type === "certificate")
            : responseJson.filter((d) => d.type === "portfolio");
        setData(respData);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
      {data.map((items) => (
        <div className="mb-12 p-4 md:w-1/2" key={items.id}>
          <div className="rounded-lg shadow-md overflow-hidden">
            <img src={items.image} alt={items.name} width={"w-full"} />
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 px-3">
              {items.name}
            </h3>
            <p className="font-medium text-base text-secondary px-3 pb-3">
              {items.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
