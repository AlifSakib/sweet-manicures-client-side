import React from "react";
import { Link } from "react-router-dom";
import image3 from "../../../assets/blogImages/js.jpg";
import image2 from "../../../assets/blogImages/jwt.jpeg";
import image1 from "../../../assets/blogImages/mongoDB.png";
import image4 from "../../../assets/blogImages/nodejs.png";
import useTitle from "../../../hooks/useTitle";
const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <Link to="#" aria-label="Article">
              <img
                src={image1}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </Link>
            <div className="py-5 text-start">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                13 Jul 2020
              </p>
              <Link
                to="#"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Difference between SQL and NoSQL
                </p>
              </Link>
              <p className="mb-4 text-gray-700">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL. <br /> SQL : SQL databases defines and
                manipulates data based structured query language (SQL). Seeing
                from a side this language is extremely powerful.In almost all
                situations SQL databases are vertically scalable.Great support
                is available for all SQL database from their vendors. <br />{" "}
                NoSQL : NoSQL database are primarily called as non-relational or
                distributed database. Non-relational or distributed database
                system.Horizontally scalable
              </p>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="6 23 1 23 1 12 6 12"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">7.4K</p>
                </Link>
                <Link
                  to="#"
                  aria-label="Comments"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">81</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <Link to="#" aria-label="Article">
              <img
                src={image2}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </Link>
            <div className="py-5 text-start">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                4 Nov 2022
              </p>
              <Link
                to="#"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  What is JWT, and how does it work?
                </p>
              </Link>
              <p className="mb-4 text-gray-700">
                A JSON web token(JWT) is JSON Object which is used to securely
                transfer information over the web(between two parties). It can
                be used for an authentication system and can also be used for
                information exchange.The token is mainly composed of header,
                payload, signature. These three parts are separated by dots(.).{" "}
                <br />A header in a JWT is mostly used to describe the
                cryptographic operations applied to the JWT like
                signing/decryption technique used on it.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="6 23 1 23 1 12 6 12"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">7.4K</p>
                </Link>
                <Link
                  to="#"
                  aria-label="Comments"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">81</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <Link to="#" aria-label="Article">
              <img
                src={image3}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </Link>
            <div className="py-5 text-start">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                28 Dec 2020
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  What is the difference between javascript and NodeJS?
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                JavaScript is a programming Language and NodeJs is a Runtime ,
                With the help of nodeJs javaScript runs on the server. <br />
                Javascript : Javascript is a programming language that is used
                for writing scripts on the website.Javascript can only be run in
                the browsers. It is basically used on the client-side.
                Javascript is capable enough to add HTML and play with the DOM.
                Javascript is used in frontend development. <br />
                NodeJS : NodeJS is a Javascript runtime environment.We can run
                Javascript outside the browser with the help of NodeJS.It is
                mostly used on the server-side.Nodejs does not have capability
                to add HTML tags.V8 is the Javascript engine inside of node.js
                that parses and runs Javascript.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="6 23 1 23 1 12 6 12"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">7.4K</p>
                </Link>
                <Link
                  to="#"
                  aria-label="Comments"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">81</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <Link to="#" aria-label="Article">
              <img
                src={image4}
                className="object-cover w-full h-64 rounded"
                alt=""
              />
            </Link>
            <div className="py-5 text-start">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                28 Dec 2020
              </p>
              <Link
                to="#"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  How does NodeJS handle multiple requests at the same time?
                </p>
              </Link>
              <p className="mb-4 text-gray-700">
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="6 23 1 23 1 12 6 12"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">7.4K</p>
                </Link>
                <Link
                  to="#"
                  aria-label="Comments"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">81</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
