import React from "react";
import { Link } from "react-router-dom";

const MyReview = ({ myReview }) => {
  const { email, message, name, title } = myReview;
  return (
    <div>
      <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl text-start">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
          <div className="mb-6 mr-6 lg:mb-0">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 lg:w-32 lg:h-32">
              <svg
                className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-grow space-y-2">
            <Link
              to="#"
              aria-label=""
              className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              {name}
            </Link>
            <p className="mb-2 text-sm text-gray-900">{email}</p>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Disrupt inspire and think tank, social
              </h6>

              <p className="mb-2 text-sm text-gray-900">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
