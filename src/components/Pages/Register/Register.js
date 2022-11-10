import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
  const { create, googleSignIn, update } = useContext(AuthContext);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(false);
  useTitle("Register");
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.image.value;
    setLoading(true);

    create(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        update({ displayName: name, photoURL: photo });
        console.log(user);
        toast.success("Signup Success");
        fetch("https://sweet-manicures.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            navigate("/");
          });

        form.reset();
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Please Provide Correct Informations");
      });
  };

  const handleSocialLogin = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        setLoading(true);
        toast.success("Signup Success");
        fetch("https://sweet-manicures.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            navigate("/");
          });
        // navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        setLoading(false);
        const errorMessage = error.message;
        toast.error("Please use a valid Email");
      });
  };
  return (
    <div>
      {loading ? (
        <div className="flex justify-center h-96 items-center">
          <HashLoader color="#36d7b7" size={80} />
        </div>
      ) : (
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mb-16 mt-10">
          <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
            Signup
          </h1>

          <form onSubmit={handleSubmit} className="mt-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-800 dark:text-gray-200 text-start"
              >
                Username
              </label>
              <input
                type="text"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="username"
                className="block text-sm text-gray-800 dark:text-gray-200 text-start"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="username"
                className="block text-sm text-gray-800 dark:text-gray-200 text-start"
              >
                Image Url
              </label>
              <input
                type="text"
                name="image"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Password
                </label>
              </div>

              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center py-2 px-4 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
              >
                Signup
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <Link
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or Signup with Social Media
            </Link>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
          </div>

          <div className="flex items-center mt-6 -mx-2">
            <button
              onClick={handleSocialLogin}
              type="button"
              className="flex items-center justify-center w-full px-6 py-2 mx-2 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
            >
              <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
              </svg>

              <span className="hidden mx-2 sm:inline">Sign up with Google</span>
            </button>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
