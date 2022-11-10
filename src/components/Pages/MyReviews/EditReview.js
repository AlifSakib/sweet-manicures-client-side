import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const EditReview = () => {
  const { user } = useContext(AuthContext);
  const review = useLoaderData();
  const navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const editReviews = {
      image: form.image.value,
      message: form.message.value,
    };

    fetch(`https://sweet-manicures.vercel.app/editReview/${review._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editReviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Review Updated");
          // setTimeout(() => {
          //   navigate("/myreviews");
          // }, 1500);
        } else {
          toast.error("Review Update Failed");
        }
      });
  };
  return (
    <div className="mb-10 ">
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto ">
            <a
              href="/"
              aria-label="View"
              className="inline-block mb-5 rounded-full sm:mx-auto"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 ">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">
              Sweet Manicures
            </h2>
            <p className="text-base text-gray-700 md:text-lg sm:px-4 text-start">
              Never lose an opportunity of seeing anything beautiful, for beauty
              is God's handwriting.
            </p>
            <hr className="w-full my-8 border-gray-300" />
          </div>
        </div>
      </div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 text-start">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Edit Review
        </h2>

        <form onSubmit={handleEdit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="mb-1 sm:mb-2">
              <label htmlFor="email" className="inline-block mb-1 font-medium">
                Image
              </label>
              <input
                placeholder="john.doe@example.org"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                defaultValue={user.photoURL}
                id="image"
                type="text"
                name="image"
                disabled
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="email" className="inline-block mb-1 font-medium">
                Message
              </label>
              <input
                placeholder="White text here ."
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="passwordConfirmation"
                type="text"
                name="message"
                defaultValue={review.message}
                required
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditReview;
