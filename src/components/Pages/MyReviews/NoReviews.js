import React from "react";
import { Link } from "react-router-dom";

const NoReviews = () => {
  return (
    <div>
      <Link
        to="/services"
        className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
      >
        No Reviews Yet.
      </Link>
    </div>
  );
};

export default NoReviews;
