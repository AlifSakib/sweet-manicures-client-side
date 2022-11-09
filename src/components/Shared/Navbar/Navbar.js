import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate = useNavigate();
  const { logOut, user } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-poppins ">
        <div className="relative flex items-center justify-between ">
          <div className="flex items-center ">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-deep-purple-accent-400 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>

              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                <span className="text-pink-accent-200">Sweet</span>{" "}
                <span className="text-deep-purple-accent-400">Manicures</span>
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  aria-label="Services"
                  title="Services"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Services
                </Link>
              </li>
              {user && (
                <>
                  <li>
                    <Link
                      to="/myreviews"
                      aria-label="My Reviews"
                      title="My Reviews"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      My Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/addservices"
                      aria-label="Add Services"
                      title="Add Services"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Add Services
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  to="/blogs"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          {user?.uid ? (
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Logout"
                  title="Logout"
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <>
              <ul className="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <Link
                    to="/login"
                    aria-label="Sign in"
                    title="Sign in"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </>
          )}

          <div className="lg:hidden z-2">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm ">
                  <div className="flex items-center justify-between mb-4 ">
                    <div className="z-1">
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-10 h-10 text-white p-2 bg-deep-purple-accent-400 rounded-full"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          <span className="text-pink-accent-200">Sweet</span>{" "}
                          <span className="text-deep-purple-accent-400">
                            Manicures
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          aria-label="Services"
                          title="Services"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Services
                        </Link>
                      </li>
                      {user && (
                        <>
                          <li>
                            <Link
                              to="/myreviews"
                              aria-label="My Reviews"
                              title="My Reviews"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              My Reviews
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/addservices"
                              aria-label="Add Services"
                              title="Add Services"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Add Services
                            </Link>
                          </li>
                        </>
                      )}
                      <li>
                        <Link
                          to="/blogs"
                          aria-label="Blogs"
                          title="Blogs"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blogs
                        </Link>
                      </li>
                      {user?.email ? (
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                          <li>
                            <button
                              onClick={handleLogout}
                              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Logout"
                              title="Logout"
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      ) : (
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/login"
                              aria-label="Sign in"
                              title="Sign in"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Sign in
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/register"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Sign up
                            </Link>
                          </li>
                        </ul>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
