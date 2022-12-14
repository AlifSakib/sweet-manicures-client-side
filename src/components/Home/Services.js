import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    fetch("https://sweet-manicures.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-poppins text-start">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <div className="max-w-lg mb-5 font-quickSand text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            {/* <span className="inline-block mb-1 sm:mb-4">
              There is no must in art
              <br className="hidden md:block" />
              because art is free.
            </span> */}
            <h5 className="mb-4 text-5xl font-extrabold leading-none font-poppins">
              <span className="inline-block text-deep-purple-accent-400">
                Featured Services
              </span>
            </h5>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </div>
          <p className="text-gray-700 lg:text-sm lg:max-w-md">
            “The beauty of a woman is not in a facial mode, but the true beauty
            in a woman is reflected in her soul. It is the caring that she
            lovingly gives, the passion that she shows. The beauty of a woman
            grows with the passing years.”
          </p>
        </div>
        {/* <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div> */}
        {services ? (
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        ) : (
          <div className="flex justify-center my-16">
            <PropagateLoader color="#36d7b7" size={25} />
          </div>
        )}
        <div className="text-center">
          <Link
            to="/services"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            See All
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
