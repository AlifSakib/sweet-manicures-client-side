import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";
import AddServiceHeader from "./AddServiceHeader";

const AddServices = () => {
  const [count, setCount] = useState([]);
  useTitle("Add Services");
  useEffect(() => {
    fetch("http://localhost:5000/services/all")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);
  const handleAddService = (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceDetails = {
      service_id: "0" + (count + 1),
      title: form.title.value,
      img: form.image.value,
      price: form.price.value,
      description: form.description.value,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Service Added Successfully");
        } else {
          toast.error("Failed To add New Service");
        }
      });
  };

  return (
    <div>
      <AddServiceHeader></AddServiceHeader>
      <div>
        <section className="text-gray-600 body-font relative text-start">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10 ">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Add Review
              </h3>
              <form onSubmit={handleAddService}>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="lastName"
                    className="inline-block mb-1 font-medium"
                  >
                    Title
                  </label>
                  <input
                    placeholder="Doe"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="title"
                    name="title"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
                    Image
                  </label>
                  <input
                    placeholder="john.doe@example.org"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="image"
                    name="image"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
                    Price
                  </label>
                  <input
                    placeholder="john.doe@example.org"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="price"
                    name="price"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
                    Description
                  </label>
                  <textarea
                    placeholder="Type your text here ."
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="description"
                    name="description"
                  />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Add Service
                  </button>
                </div>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Keep your services alive
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddServices;
