import React from "react";

const Reviews = ({ review }) => {
  // const { user } = useContext(AuthContext);
  const { name, email, message, time, img } = review;
  return (
    <div>
      <div className="lg:pr-10">
        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 mb-5">
          {img ? (
            <img src={img} alt="" />
          ) : (
            <svg
              className="absolute -left-1 w-12 h-12 text-gray-400"
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
          )}
        </div>
        <h5 className="mb-4 text-4xl font-extrabold leading-none">
          <span className="inline-block text-deep-purple-accent-400">
            {name}
          </span>
        </h5>
        <p className="mb-6 text-gray-900">Email : {email}</p>
        <p className="mb-6 text-gray-900">{message}</p>
        <p className="mb-6 text-gray-900">{time}</p>

        {/* <p className="mb-6 text-gray-900">{new Date().toTimeString()}</p> */}
        <hr className="mb-5 border-gray-300" />
      </div>
    </div>
  );
};

export default Reviews;
