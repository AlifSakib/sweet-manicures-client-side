import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import useTitle from "../../../hooks/useTitle";
import ServiceHeader from "./ServiceHeader";
import SignleService from "./SignleService";

const AllServices = () => {
  const [services, setServices] = useState(null);
  useTitle("Services");
  useEffect(() => {
    fetch("https://sweet-manicures.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <div>
      <ServiceHeader></ServiceHeader>
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-poppins text-start">
          <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
            <div className="max-w-lg mb-5 font-quickSand text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
              {/* <span className="inline-block mb-1 sm:mb-4">
                There is no must in art
                <br className="hidden md:block" />
                because art is free.
              </span> */}
              <h5 className="mb-4 text-7xl font-extrabold leading-none font-poppins">
                <span className="inline-block text-deep-purple-accent-400">
                  All Services
                </span>
              </h5>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
            </div>
          </div>
          {/* <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <SignleService
                key={service._id}
                service={service}
              ></SignleService>
            ))}
          </div> */}
          {services ? (
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <SignleService
                  key={service._id}
                  service={service}
                ></SignleService>
              ))}
            </div>
          ) : (
            <div className="felx w-9/12 mx-auto">
              <PacmanLoader color="rgba(54, 215, 183, 1)" size={40} />
            </div>
          )}
          <div className="text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
