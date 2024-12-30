import CertificateCard from "./CertificateCard";
export default function Achievement() {
  return (
    <section id="certificate" className="pt-36 pb-16 bg-slate-100 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              ACHIEVEMENT
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
              Certificate
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              repellat architecto quod ex possimus nobis ducimus quis, sit vel
              quo cum, dicta at quaerat et incidunt reprehenderit, neque totam
              temporibus!20
            </p>
          </div>
        </div>
        <CertificateCard />
      </div>
    </section>
  );
}
