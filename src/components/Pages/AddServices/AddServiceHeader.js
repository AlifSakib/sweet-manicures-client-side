import React from "react";
import { Link } from "react-router-dom";

const AddServiceHeader = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-start">
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Beauty begins the
                <br className="hidden md:block" />
                moment you decide{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  to be yourself.
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700">
                “People are like stained-glass windows. They sparkle and shine
                when the sun is out, but when the darkness sets in, their true
                beauty is revealed only if there is a light from within.”
                —Elisabeth Kubler-Ross
              </p>
              <Link
                to="#"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServiceHeader;
