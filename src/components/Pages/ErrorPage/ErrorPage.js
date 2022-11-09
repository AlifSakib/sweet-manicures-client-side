import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import render from "../../../assets/not-found.json";

const ErrorPage = () => {
  return (
    <div>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Error 404
            </p>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
              Oops! The page you're looking for isn't here.
            </h1>
            <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
              You might have the wrong address, or the page may have moved.
            </p>
            <div className="flex flex-col items-center md:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Back To Homepage
              </Link>
              <Link
                to="#"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <div className="w-full h-full  bg-gray-200 rounded-lg">
              <Lottie animationData={render} loop={true}></Lottie>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
