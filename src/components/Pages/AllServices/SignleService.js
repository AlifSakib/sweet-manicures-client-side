import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
const SignleService = ({ service }) => {
  const { title, img, description, price, _id } = service;
  return (
    <div>
      <div
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2 h-full"
      >
        <div className="flex flex-col h-full">
          <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            <PhotoView src={img}>
              <img src={img} className="object-cover w-full h-48" alt="" />
            </PhotoView>
          </PhotoProvider>

          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5 space-y-6">
              <h6 className="mb-2 font-semibold leading-5">{title}</h6>
              <p className="text-sm text-gray-900">
                {description.length > 100
                  ? description.slice(0, 100) + " . . ."
                  : description}
              </p>
              <p>Service Fee : {price}$</p>
              <Link
                to={`/services/${_id}`}
                className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignleService;
