import React from "react";

const Service = () => {
  return (
    <div>
      <a href="/" aria-label="View Item">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
            <p className="text-sm tracking-wide text-gray-300">
              Painted between 1503 and 1517, Da Vinci’s alluring portrait has
              been dogged by two questions since the day it was made: Who’s the
              subject and why is she smiling?
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Service;
